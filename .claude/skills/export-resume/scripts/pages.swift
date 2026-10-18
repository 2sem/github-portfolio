import PDFKit
import AppKit

// args: pdf [outDir]  -> prints page count; writes p1.png... when outDir given
let a = CommandLine.arguments
let doc = PDFDocument(url: URL(fileURLWithPath: a[1]))!
print("pages: \(doc.pageCount)")
guard a.count > 2, !a[2].isEmpty else { exit(0) }
for i in 0..<doc.pageCount {
  let img = doc.page(at: i)!.thumbnail(of: NSSize(width: 800, height: 1131), for: .mediaBox)
  let rep = NSBitmapImageRep(data: img.tiffRepresentation!)!
  try! rep.representation(using: .png, properties: [:])!
    .write(to: URL(fileURLWithPath: a[2] + "/p\(i + 1).png"))
}
