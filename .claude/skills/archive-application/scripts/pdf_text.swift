import PDFKit
import Foundation
let args = CommandLine.arguments.dropFirst()
for p in args {
    if let d = PDFDocument(url: URL(fileURLWithPath: p)), let s = d.string {
        let out = (p as NSString).deletingLastPathComponent
        _ = out
        print("=====FILE:\(p)")
        print(s)
    } else { print("=====FILE:\(p)\n") }
}
