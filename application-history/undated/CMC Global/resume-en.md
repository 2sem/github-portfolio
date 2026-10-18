# Young-jun Lee
**Senior iOS Engineer · BLE Device Integration**

kofggm@gmail.com · [LinkedIn](https://www.linkedin.com/in/gamehelper/) · [GitHub](https://github.com/2sem) · [Medium](https://toyboy2.medium.com) · [Portfolio](https://2sem.github.io)

I'm an iOS-focused engineer who has owned service stability across domains and platforms, from crash resolution and performance optimization to CI/CD. I led 2–3 mobile engineers and established a code review process and a recurring tech-debt cycle within the team. When I pick up an unfamiliar tool, I dig in until I find techniques my colleagues hadn't discovered, then share them to lift the whole team's efficiency. I give active feedback on product and API specs to find better solutions together, and I treat AI coding agents as collaborators whose output I critically verify.

**Mobile 8+ yrs** (iOS 5+ yrs) · 15+ yrs total

---

## Experience

### SK AX (contract via D2L) · SK Group IT services
**Freelance iOS Developer** · 2024.06 – 2025.10 (1+ yr)
Maintained 3 SKT iOS projects: T world (B2C customer service app), SWING (B2B app for SKT retail stores), AI Layer SDK

- Incrementally moved closure-based API calls to **Swift Concurrency** and built new UI with **Combine**, improving productivity and performance
- Added **Unit Tests** for new API integrations to verify edge cases
- Restored the **SwiftUI widget** for users with a security lock enabled by sharing Cookie Storage between app and widget to reuse the session, and proposed an API fix to the server developer
- Traced and reproduced the cause of **5,000+ weekly crashes** (force unwrapping in a **WKWebView** delegate) after the predecessor's PR hypothesis failed to reproduce them, then fixed it
- Migrated Objective-C to Swift one extension at a time, and worked through a per-library **SPM** migration ahead of CocoaPods' end of life
- Automated build → **TestFlight** → Slack IPA upload with **Fastlane**
- Replaced oversized, unreviewable MRs with Subtask-level MRs under Jira Epics plus an **MR Template**, adopted by other projects after positive feedback from the SK manager
- Coached **2 junior engineers** by splitting work into Subtasks and delegating them

**Skills:** Swift · SwiftUI · UIKit · Objective-C · WidgetKit · Swift Concurrency · Combine · RxSwift · MVVM · Unit Test · XCTest · SPM · Fastlane · GitLab CI/CD · Firebase · Jira

---

### Olulo (Kickgoing) · Korea's first shared e-scooter service, expanded to e-bikes
**App Developer → Mobile Tech Lead** · 2021.06 – 2023.10 (2+ yrs)
React Native cross-platform app (iOS · Android)

- Implemented **BLE** integration for new hardware including e-bike locks and helmet locks, handling unlock on rental and lock-state verification on return
- Analyzed the **react-native-ble-plx** native bridge (iOS **Core Bluetooth** layer) to improve BLE connection performance, verified by measuring **scan and connection time**
- Reduced zone-info API calls from **4 to 1** (location data caching), cutting data usage by **at least 75%**
- Strengthened **Jest** unit tests and sped them up by tuning run parameters and enabling caching
- Consolidated separate iOS/Android GitHub CI/CD pipelines into **Fastlane**, and cut deployment time by **50%** with build caching
- Integrated **Channel Talk SDK** to move phone-only customer support in-app; reported a crash in its notification classification method to the vendor and submitted a fix PR
- Led **2–3 engineers** and set aside **1 hour a day** for tech debt, completing work such as the React Native upgrade
- Standardized code review and work processes with PR Templates and Jira Workflow

**Skills:** React Native · TypeScript · BLE · react-native-ble-plx · Native Bridge (Objective-C / Java) · Jest · Fastlane · GitHub Actions · Channel Talk SDK

---

### SJW International (Siwonschool) · Korea's No.1 online language learning platform
**iOS Developer** · 2018.06 – 2021.05 (3 yrs)

- Reset a stalled project with a full spec review, then built the in-house app solo from scratch with the server developer
- Implemented lecture **download and offline playback**
- Proposed, designed, and implemented an in-app review prompt, raising the App Store rating from 4.1 to **4.7**
- Adopted **MVVM** architecture together with RxSwift
- Designed an **AVFoundation** video player library for reuse from the start, shared by both apps I built
- Built a **UI Test** QA process that walks through every lecture to verify it plays
- Detected memory leaks with **Instruments** and fixed retain cycles using the Memory Graph
- Set up **Fastlane** CI/CD on a spare iMac

**Skills:** Swift · UIKit · MVVM · RxSwift · AVFoundation · XCUITest · Instruments · Fastlane · Firebase

---

### Independent iOS Developer
2017.02 – 2018.06 (1+ yr)

- Related Stocks Finder: proposed push notifications and built a Node.js · **FCM** sending server, **doubling revenue** (peak MAU 5,899)
- ShowNote (iPad PDF presentation app): conceived the patent's core **"Trigger"** concept and continued maintenance after my engagement ended, contributing to a **patent filing** and a **₩1B angel investment** (Enable Holdings, 2018.07)

**Skills:** Swift · UIKit · Firebase · PDF Rendering · Node.js

---

### CREDiF · SI/SM for Korea's telecom carriers and public institutions
**Developer** · 2009.08 – 2017.02 (7+ yrs)

- Built an SKT **O2O Android SDK** for customers buying low-power **Beacons**, using **AIDL** instead of JNI
- Built a **Wi-Fi indoor positioning** research platform solo, end to end
- Developed and maintained **30+ projects** as a full-stack developer for 7+ years, from server (C) to clients (C# / Java, mobile)

**Skills:** C · C# · Java · AIDL · Beacon

---

## Projects & Activities

- Applied **Tuist** across my personal [iOS apps](https://apps.apple.com/kr/developer/young-jun-lee/id1225480114) to build and run a modular structure (personal projects only), and applied **Clean Architecture** to Game Helper during its **SwiftUI** migration
- Built an [AI agent Skill for SwiftUI migration](https://github.com/2sem/swiftui-migrator-skill) to modernize personal apps, cutting work that took 1+ week per app down to **1–2 days**
- Built an [agent-based MR review](https://medium.com/@toyboy2/automating-mr-review-on-self-hosted-gitlab-using-ai-ollama-932e1cab30d9) with **Ollama** on a GitLab Runner under security constraints at SK AX, helping a non-developer manager meet an AI adoption KPI
- Presented ["Accelerating build iteration with Tuist cache, selective testing, and easy CI"](https://youtu.be/FFkEbqG4ips) at Seoul iOS Meetup; contributed the [Korean translation](https://toyboy2.medium.com/contributing-to-open-source-as-translator-translating-tuist-documentation-into-korean-ad08b205da65) of the Tuist docs
- Publish [iOS](https://medium.com/@toyboy2/list/ios-4adba6bc75d5), React Native, and TCA articles on Medium

**Skills:** SwiftUI · Clean Architecture · Tuist · TCA

---

## Education

**Seoil University** · Software Engineering (3-year program) · Graduated
2003.03 – 2009.02
