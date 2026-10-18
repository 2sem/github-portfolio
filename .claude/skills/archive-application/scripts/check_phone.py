"""Report files containing phone numbers. Prints paths and counts only, never the match.

Usage: python3 -I check_phone.py <dir> [<dir>...]
Reads md/txt, docx/pptx (zip xml) and pdf (macOS PDFKit via pdf_text.swift).
"""
import os, re, subprocess, sys, zipfile

PH = re.compile(r'(\+?82[\s.-]?)?\(?0?1[016789]\)?[\s.-]?\d{3,4}[\s.-]?\d{4}|\b0\d{1,2}[\s.-]\d{3,4}[\s.-]\d{4}\b')
HERE = os.path.dirname(os.path.abspath(__file__))

def text(p):
    e = p.lower().rsplit('.', 1)[-1]
    try:
        if e in ('md', 'txt'):
            return open(p, encoding='utf-8', errors='ignore').read()
        if e in ('docx', 'pptx'):
            z = zipfile.ZipFile(p)
            return '\n'.join(re.sub(r'<[^>]+>', '', z.read(n).decode('utf-8', 'ignore'))
                             for n in z.namelist() if n.endswith('.xml') and not n.startswith('docProps'))
    except Exception:
        pass
    return ''

def pdf_texts(paths):
    if not paths:
        return {}
    out = subprocess.run(['swift', os.path.join(HERE, 'pdf_text.swift'), *paths],
                         capture_output=True).stdout.decode('utf-8', 'ignore')
    return {b.split('\n', 1)[0]: b for b in out.split('=====FILE:')[1:]}

def main(roots):
    pdfs, hits = [], []
    for root in roots:
        for d, _, fs in os.walk(root):
            if any(x in d for x in ('node_modules', '/dist', '/.git')):
                continue
            for f in fs:
                p = os.path.join(d, f)
                if f.lower().endswith('.pdf'):
                    pdfs.append(p)
                else:
                    n = len(PH.findall(text(p)))
                    if n: hits.append((n, p))
    for p, body in pdf_texts(pdfs).items():
        n = len(PH.findall(body))
        if n: hits.append((n, p))
    for n, p in sorted(hits, key=lambda h: h[1]):
        print(n, p)
    print(f'checked pdfs={len(pdfs)} flagged={len(hits)}')

if __name__ == '__main__':
    main(sys.argv[1:])
