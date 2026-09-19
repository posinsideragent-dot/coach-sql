// Real onboarding tutorial content for SQL Account support new hires.
// Synthesized from the official SQL Account knowledge-base PDFs (cdn.sql.com.my)
// covering Days 1-5 of the onboarding plan. Each lesson corresponds to one
// KB article and gives the practical, support-relevant takeaways a new hire
// needs — not the full document.

export const TUTORIALS = {
  1: {
    topic: "Orientation & Setup",
    goal: "The new hire understands what SQL Account is and can get a fresh install running end to end.",
    lessons: [
      {
        title: "How to Install SQL Account",
        minutes: 6,
        points: [
          "Default install path is C:\\eStream\\SQLAccounting, with bin, Share, and DB subfolders — don't let candidates change these unless they have a reason to.",
          "If Windows' ProgramData path shown during install doesn't match the bin/Share/DB paths, it must be corrected before continuing or the install can end up inconsistent.",
          "The installer offers an 'Evaluation' option that auto-creates a testing company — this is the fastest way to get a demo environment running.",
          "To create a brand-new empty company instead: File > Logon > Setting > Create New Database, type a company name, click OK, then double-click the new company to log in.",
          "Default login for a freshly created company is username ADMIN / password ADMIN.",
        ],
      },
      {
        title: "Account Book Registration in SQL",
        minutes: 7,
        points: [
          "Registration starts with File > Company Profile — fill in full company details and save (diskette icon) before doing anything else.",
          "Company name and address punctuation (commas, periods) must be typed exactly right — the activation code is issued based on these exact details, so typos here cause activation mismatches later.",
          "File > Product Activation is used to generate a Print Activation Request, which can be exported to PDF and emailed to the local sales agent.",
          "Activation codes take about 3 working days to be issued — set that expectation with customers who ask why their license isn't active yet.",
          "When the code arrives, both Digit A and Digit B must match exactly what was provided, or Register will fail — this is the #1 thing to check when a customer says activation isn't working.",
        ],
      },
      {
        title: "How to Register Your New Company and Change Company Address",
        minutes: 6,
        points: [
          "Registration flow: create a new database, fill in Company Profile, then File > Product Activation > Print Activation Request, and send that form in for activation.",
          "Digit A is derived from Company Name + Address; Digit B is derived from the Activation Code itself — both must match the vendor's record exactly.",
          "Changing a company's registered address requires re-registering: repeat the activation request with the new address, and attach proof of the new address (utility bill, bank statement, or similar) so the vendor can verify it.",
          "This is a common support ticket — customers who moved offices need to know they can't just edit the address locally and expect it to stay activated.",
        ],
      },
      {
        title: "How To Activate License",
        minutes: 5,
        points: [
          "Must be logged in as ADMIN to activate a license.",
          "Go to File > Product Activation, then open the license PDF file provided by the vendor.",
          "Copy Product ID, Company Name, and Company Address directly from the license PDF into the system fields — don't retype them, to avoid mismatches.",
          "After pasting, Digit A should auto-match what's on the PDF; click Register to complete.",
          "Confirm success by checking File > Company Profile — if it's highlighted in yellow, registration succeeded.",
        ],
      },
      {
        title: "Network Setting",
        minutes: 8,
        points: [
          "SQL Account runs on a Firebird database server — the server PC needs Firebird 3.0+ installed (64-bit version if the OS is 64-bit), running in SuperServer mode.",
          "Windows Firewall on the server needs an inbound rule opening TCP port 3050 (Firebird's default port) or client PCs won't be able to connect.",
          "Network and Sharing Center settings matter: Network Discovery on, File and Printer Sharing on, and Password Protected Sharing turned OFF for the shared folder to be reachable.",
          "The SQLAccounting\\Share folder must be shared with Full Control permissions (both Sharing tab and Security tab) for 'Everyone', otherwise client machines get access-denied errors.",
          "On the server install, Database Engine must be set to Firebird Server, and Test Connection should show blue/success status before proceeding — antivirus often needs a firewall exception too.",
          "On each client PC, install SQL Account, then add a Group pointing at the server's shared DCF file to connect — this is the standard fix for 'cannot connect to database' complaints on multi-user setups.",
        ],
      },
      {
        title: "Enlarging UI Screen in SQL",
        minutes: 4,
        points: [
          "The fix for a customer complaining the UI is 'too small to read' is a Windows display scaling change, not an in-app setting.",
          "Windows 10: right-click desktop > Display Settings > Display tab > slide to 125%/150%/200% scale, then sign out or restart for it to fully apply.",
          "Windows 7/8/Vista: right-click desktop > Personalize > Display (bottom-left) > same scaling slider.",
          "Windows XP: Display Properties > Settings tab > Advanced > choose a preset DPI or use Custom Setting to drag to a specific size.",
        ],
      },
    ],
    practiceTask: "Install SQL Account on the training machine, register a new demo company, activate the license, and adjust the UI scale to a comfortable size.",
  },

  2: {
    topic: "Sales & Customer",
    goal: "The new hire can answer the most common customer/payment support questions.",
    lessons: [
      {
        title: "Customer Payment Guide (Local & Multi Currency)",
        minutes: 9,
        points: [
          "For a local-currency customer paying in the same currency (e.g. RM customer paying RM), payment knock-off is straightforward — just tick the invoice and confirm the amount.",
          "For a foreign-currency customer (e.g. invoiced in USD) paying in local currency, the system auto-calculates the currency rate to knock off the payment — the bank payment method used determines which currency the payment amount is recorded in (check Tools > Maintain Payment Method).",
          "For same-currency foreign payments (USD invoice paid in USD), you must first set up a USD bank account under GL, then assign that currency to the payment method under Maintain Payment Method — only then does the currency-rate field become editable on entry.",
          "When the payment date's exchange rate differs from the invoice date's rate, SQL Account automatically calculates and prompts a forex gain/loss amount on save — this is expected behavior, not a bug, and is a very common 'why did this number appear' support question.",
          "For a customer paying in a third currency (e.g. USD customer paying in SGD), maintain a payment method tied to the SGD bank account; the local amount and knock-off math flow the same way once that's set up.",
        ],
      },
      {
        title: "Customer Contra and Supplier Contra",
        minutes: 6,
        points: [
          "Contra entries are for parties who are both a customer and a supplier — it lets you offset an outstanding sales invoice against an outstanding purchase invoice without touching the bank account balance.",
          "Before using it, Tools > Options > General Ledger must have a valid Contra Account configured, or the feature won't post correctly.",
          "Workflow: Customer > Customer Contra > New — select the customer, enter the contra amount, knock off the relevant invoice, and save; the system auto-generates a Contra Number.",
          "That same Contra Number must then be located and edited under Supplier > Supplier Contra, with a matching contra amount and the supplier invoice knocked off.",
          "After posting, any remaining balance (e.g. the difference between the two invoice amounts) stays outstanding and gets collected/paid normally through regular Customer/Supplier Payment.",
        ],
      },
      {
        title: "Post-Dated Cheque & Bounced Cheque",
        minutes: 6,
        points: [
          "A post-dated cheque is recorded as a normal Customer Payment, then right-click near the payment header and choose 'Set Posting Date' to specify the actual future date the cheque clears.",
          "Post-dated cheques can be reviewed via Customer Reports > Post Dated Cheque Listing, filtered by the payment date (not the posting date) — useful when a customer asks 'what cheques are pending clearance'.",
          "To mark a cheque as bounced: open the existing customer payment, Edit, right-click near the header and select 'Bounced Status', tick the box, and set a bounce date that is after the original posting date.",
          "Once marked bounced, the ledger report clearly reflects the reversal on the bounce date — this is the standard way to undo a payment that didn't actually clear, rather than deleting the transaction.",
        ],
      },
      {
        title: "Open Bank Deposit",
        minutes: 5,
        points: [
          "Open Bank Deposit is for grouping multiple cheques that were physically banked together in a single deposit slip, so they reconcile as one line item later.",
          "From Customer Payment > New, right-click and choose 'Open Bank Deposit', then search by date/account to pull in all customer payments made on that transaction slip and tick the ones that belong together.",
          "The same feature is also accessible from GL > Cash Book Entry by right-clicking near Payment Voucher.",
          "At Bank Reconciliation time, these grouped cheques appear as a single combined row matching the bank statement's deposit total — this is the fix when a customer's bank statement shows one lump deposit but SQL shows several separate payments.",
        ],
      },
      {
        title: "Cash Drawer Kick Out",
        minutes: 5,
        points: [
          "Configured under Tools > Options > Barcode — two connection modes exist: Direct Kick Out (drawer wired straight to the PC) and Printer Kick Out (drawer wired through the receipt printer).",
          "For Direct Kick Out, select the correct COM Port and use the Kick Out test button; if the port isn't listed, it can be typed in manually.",
          "RJ11/RJ14-style cash drawers are known to be unreliable with direct kick-out — the standard recommendation is switching to a USB/COM-connected drawer.",
          "Standard troubleshooting checklist for a non-responsive drawer: confirm Windows OS and SQL Account version, test that receipts print normally, test the Windows print-test function, retest the Kick Out button, and verify the receipt printer model/driver and the cash drawer model before escalating.",
        ],
      },
    ],
    practiceTask: "In the demo company, record a local customer payment, a multi-currency payment, and a bounced cheque reversal.",
  },

  3: {
    topic: "Stock & Inventory",
    goal: "The new hire can troubleshoot everyday stock questions.",
    lessons: [
      {
        title: "Costing Method",
        minutes: 6,
        points: [
          "Costing method is set per Stock Group under Stock > Maintain Stock Group, and SQL Account supports three methods: FIFO, Fixed Costing, and Weighted Average.",
          "FIFO assumes the first goods purchased are the first goods sold; Weighted Average spreads cost across all units; Fixed Costing uses a manually maintained fixed cost on the stock item.",
          "Changing the costing method on a stock group that already has transaction history requires running Tools > Analyse Data Integrity afterward, or the costing reports will show stale/incorrect figures.",
          "The system recalculates cost from the very first transaction date to the current date using the new method once that integrity check is run — this is why customers see costing numbers 'change' after a method switch.",
        ],
      },
      {
        title: "Barcode",
        minutes: 6,
        points: [
          "Barcode label templates for Goods Received Notes are downloaded separately from SQL's template store and imported via Tools > Report Designer > Import > Fast Report(*.fr3), then saved as an SQL Report (*.rtm).",
          "Barcode labels are edited in the Report Designer opened from the relevant document preview (e.g. Purchase > Goods Received Note > Preview > click the report link).",
          "Because label sizes are small, the report's page size must usually be changed to millimeters (File > Page Setup > Paper Size) to match the physical label dimensions.",
          "The barcode object itself (DBBarcode) needs its Type set correctly (commonly Code 128) and its bar width configured to match what the label printer/scanner expects.",
          "An event handler on the document detail band controls how many labels print per line item — e.g. if quantity is 10, the barcode repeats 10 times, one per unit.",
        ],
      },
      {
        title: "Stock Adjustment & Stock Take",
        minutes: 6,
        points: [
          "Stock Adjustment (Stock > Stock Adjustment > New) lets a user manually key in quantity in/out — it's effectively a combined stock-received/stock-issue entry, most often used for stock take reconciliation.",
          "The recommended stock take workflow: print a Stock Physical Worksheet (Stock > Print Stock Physical Worksheet) filtered by the right date/group/location/batch, and give it to the warehouse staff to fill in actual counted quantities by hand.",
          "After counts are filled in, open both the Stock Physical Worksheet and Stock Adjustment side by side (Window > Tile Vertical), select all worksheet rows, and drag-and-drop them into Stock Adjustment.",
          "Key terms: Book Qty is what the system currently records; Physical Qty is what was actually counted; Qty (the adjustment) is the variance (Physical − Book), which the system applies automatically.",
        ],
      },
      {
        title: "Maintain Stock Item - Reorder Level & Reorder Qty",
        minutes: 5,
        points: [
          "Reorder Level is the stock quantity threshold that should trigger a new purchase order; Reorder Qty is how much to order when that threshold is hit.",
          "When balance quantity drops below the configured reorder level, saving a document triggers a 'Stock Quantity Control' warning dialog (toggle this at Tools > Option > Miscellaneous > Prompt Negative Stock Quantity Dialog Box).",
          "Stock > Print Stock Reorder Advise generates a report of items below threshold, with filter criteria combining On Hand Qty (optionally ± PO/SO) against Reorder Level, Min Level, or Max Level.",
          "From the Reorder Advise report, items can be shift-selected and dragged directly into a New Purchase Order, auto-filling PO Qty with the configured Reorder Qty — the fast way to build restock POs.",
        ],
      },
      {
        title: "Multi Location Module",
        minutes: 6,
        points: [
          "Multi Location is used for scenarios like multiple warehouses/branches, inter-branch transfers, consignment stock, and van-sales.",
          "Multiple Warehouse example: purchases can be received directly into a specific branch location, and sales can be issued from that same branch location — the Stock Card report then shows movement split by location.",
          "Consignment example: a Stock Transfer document moves goods from the default warehouse to a customer's consignment location without billing; billing only happens later, for the quantity actually sold, issued from the customer's location.",
          "This module is the answer whenever a customer asks how to track stock sitting at more than one physical place, or goods held at a customer's site before being sold.",
        ],
      },
      {
        title: "Serial No Module",
        minutes: 5,
        points: [
          "Serial number tracking is turned on per item via Stock > Maintain Stock Item > Edit > tick Serial No.",
          "Serial numbers can be entered three ways on a Goods Received Note or Delivery Order: manually one at a time, imported from a Notepad/Word list, or auto-generated with a format + start number + count.",
          "Stock Adjustment does NOT support serial numbers — Stock Received / Stock Issue must be used instead when serial-tracked items need manual correction.",
          "Two access-control settings matter a lot for support tickets: 'Always Match Qty with Serial No' (forces exact serial/qty matching) and 'Allow Non-Existent Serial No' (lets stock go out with a serial number that was never received) — these explain most serial-number report discrepancies.",
          "Print Stock Serial No Conflict catches duplicate or non-existent serial numbers; Print Stock Outstanding Serial No shows documents that skipped serial entry entirely.",
        ],
      },
    ],
    practiceTask: "Create a stock item with a reorder level, perform a stock adjustment, and print a barcode label.",
  },

  4: {
    topic: "General Ledger & Reports",
    goal: "The new hire can walk a customer through a reconciliation or a report fix.",
    lessons: [
      {
        title: "Bank Reconciliation",
        minutes: 6,
        points: [
          "Done under GL > Bank Reconciliation — select the Bank Statement Date and the specific bank account, then set the display period (From is usually left blank, To matches the statement date).",
          "Useful filter checkboxes: 'Show Unticked Transaction', 'Show Current Recon Transaction', and 'Merge Bank Charges' — these control what shows up to match against the physical statement.",
          "The core workflow is manually ticking each system transaction that matches a line on the physical bank statement, then saving.",
          "F6 previews the Bank Reconciliation Report once the tie-out is saved — this is what to hand a customer asking to prove their books match the bank.",
        ],
      },
      {
        title: "Auto Bank Reconciliation",
        minutes: 6,
        points: [
          "Same starting point as manual recon (GL > Bank Reconciliation > New), but after applying, use 'Load Statement' to import the actual bank statement file (PDF or CSV).",
          "The system detects the bank name from the imported file and asks for confirmation before proceeding, then auto-fills the bank closing amount.",
          "Auto-matching logic works on two criteria: cheque number + amount, or description + amount — matched transactions get auto-ticked and highlighted.",
          "Transactions that can't be auto-matched are flagged in red; the fix is clicking the unmatched line, using the 'search by same DR/CR amount' tool, and manually clicking Match on the correct counterpart.",
          "This is the faster alternative to manual reconciliation and is worth recommending to any customer doing recon by hand every month.",
        ],
      },
      {
        title: "Trial Balance not Tally",
        minutes: 6,
        points: [
          "First check: GL > Maintain Chart of Account — Retained Earnings must have exactly one account code assigned; if it's empty, create it under Reserve and drag it into Retained Earnings.",
          "Second check: GL > Maintain Opening Balance — untick 'Project' at top left and confirm Local DR equals Local CR; an unbalanced opening balance is a very common root cause.",
          "If both of the above are fine, the imbalance is caused by a specific transaction — run GL > Print Journal of Transaction Listing for the affected date range, preview it, and select the 'GL Journal-of-Transaction-Imbalance-Document' report to identify the exact culprit document.",
          "If the cause still isn't clear after that, the standard escalation path is uploading a backup file to SQL's support upload portal for deeper investigation.",
        ],
      },
      {
        title: "Guide to Calculate Profit & Loss Percentage",
        minutes: 4,
        points: [
          "The universal formula behind every P&L percentage column is: (Account Amount ÷ Total Sales) × 100.",
          "This applies the same way to Sales %, Purchases %, Gross Profit %, Expenses %, and Net Profit % — only the numerator changes.",
          "Percentages are rounded to 1 decimal place by default — this explains small rounding differences customers sometimes ask about when checking a P&L report by hand.",
          "Knowing this formula lets you quickly sanity-check any P&L percentage a customer questions, without needing to dig into the report's underlying script.",
        ],
      },
      {
        title: "Fast Report - Basic Guide",
        minutes: 8,
        points: [
          "Report Designer (Tools > Report Designer, or via a document's Preview screen) is SQL Account's built-in tool for customizing invoice/document layouts — it uses a band-based design similar to Crystal/FastReport.",
          "Key band types: Group Header/Footer (print once per group), Master Data (main dataset, one per page), Detail Data (repeats per line item), and Page Footer (prints on every page) — understanding these explains most 'why is my footer/total in the wrong place' tickets.",
          "Common objects placed on a report: Picture (logos), Text Memo, Rich Text, System Text (dates/page numbers/sums), Draw Line/Shapes, Check Box, and Barcode.",
          "'Stop Position' vs 'Print Count' controls how many detail rows print before cutting off/continuing to a new page — Stop Position (in pixels) is generally recommended over Print Count (fixed record count).",
          "Conditional formatting (e.g. highlight rows where Qty > 10) is done via a Memo's Highlight tab with an expression and font override — useful for showing customers how to flag specific rows without custom scripting.",
          "This tool involves light scripting (Pascal-like syntax) for advanced customizations (FAQ section covers 15+ common tweaks) — for anything beyond basic layout/formatting, expect to guide customers to specific known recipes rather than freehand each fix.",
        ],
      },
      {
        title: "RTM Report: How to Change 6% to 0%",
        minutes: 4,
        points: [
          "SQL Account's built-in report formats auto-detect the correct tax rate based on the invoice date (e.g. GST @ 6% pre-cutover, GST @ 0% after), including correctly handling a Delivery Order issued before the cutover but invoiced after.",
          "If a customer has a previously customized report format, the auto-detection logic needs to be manually re-applied in Report Designer's script (Calc > Module > Event Handlers > tax-amount procedure) by comparing the invoice's tax date against the cutover date.",
          "A related common request is making a blank/zero tax amount display as '0.00' instead of blank — done via an OnGetText script on the tax amount field.",
          "This is squarely a Report Designer customization issue — recognize it as 'customized format didn't get the tax-rate-switch logic' rather than a data or licensing problem.",
        ],
      },
      {
        title: "How to do Rounding Report",
        minutes: 4,
        points: [
          "Cash/currency rounding (e.g. rounding invoice totals to the nearest 5 cents) is implemented in Report Designer via a custom SQL query bound into the report (declared in the Calc module, run onCreate/onBeforePrint).",
          "The rounding amount is typically captured from a special line item code (e.g. 'RTN5Cents') that represents the rounding adjustment, summed separately from normal line items.",
          "A hidden item code used purely for the rounding calculation (like RTN5Cents) is then hidden from the visible item list on the printed report via a visibility expression on that detail region.",
          "Recognize customer requests like 'my invoice total doesn't round nicely' or 'I need my invoices to always round to 5 cents' as Report Designer customization work, not a core accounting bug.",
        ],
      },
    ],
    practiceTask: "Run a bank reconciliation on demo data, generate a P&L statement, and apply one Fast Report fix from the guide.",
  },

  5: {
    topic: "Tools, Troubleshooting & Review",
    goal: "The new hire can handle access requests and basic database issues, and consolidates the whole week.",
    lessons: [
      {
        title: "Create A New User, Access Control & Reset Password",
        minutes: 6,
        points: [
          "New users are created under Tools > Maintain User > New, entering a login name and saving.",
          "Access Control (More > Access Control) governs four permission levels per module: Execute (view/access), New (create documents), Edit (modify after save), and Delete — this four-tier model is the basis of almost every 'why can't this user do X' ticket.",
          "Password resets: More > Reset Password generates a temporary password that can be copied; the user then logs on with it and is prompted to set a new permanent password on first login.",
          "Always confirm which specific modules a customer wants locked down before granting broad access — narrowly scoping New/Edit/Delete per module is the standard best practice.",
        ],
      },
      {
        title: "Password Policy (with 2 steps Verification)",
        minutes: 6,
        points: [
          "Company-wide password rules live under Tools > Options > Password Policy: Maximum Password Age (forces periodic changes), Minimum Password Length, Password History (blocks reusing recent passwords), and required character mix (upper, lower, number, symbol).",
          "New-user password resets are done the same way as standard resets (Maintain User > More > Reset Password), with the option to auto-copy the generated password to clipboard for emailing to the user.",
          "Two-Step Verification is enabled per user under File > 2-Steps Verification — after entering the current password, the user links an authenticator app on their phone, after which every login requires a time-based code from that app.",
          "This is the feature to point customers to when they ask about strengthening login security or meeting an internal security policy requirement.",
        ],
      },
      {
        title: "Maintain User",
        minutes: 5,
        points: [
          "Full user setup lives under Tools > Maintain User: create the user (New > assign Code/Name > Save), then set a password via Edit > More > Change Password.",
          "Access rights review: Edit > More > Access Control shows the complete permission list, including per-report visibility control (hiding specific reports from a role).",
          "Time-saving trick for onboarding a new employee with the same permissions as an existing one: save the existing user's access rights as an export, then on the new user use Edit > More > Import Access Rights to copy them over instead of re-configuring from scratch.",
          "This import/export access-rights trick is worth remembering — it's the efficient answer whenever a customer needs to set up several users with identical permissions.",
        ],
      },
      {
        title: "Fix Database Shutdown Error",
        minutes: 5,
        points: [
          "This error is typically caused by the database not shutting down properly — most often from a sudden power cut or an improper close of the program while the DB engine was active.",
          "The fix tool is SQL DiagnosisV2 (a separate downloadable utility) — launch it and select the shut-down database to repair/validate it.",
          "This is a distinct, older/lighter tool from the general SQL Accounting Diagnosis utility used for routine database validation — recognize 'database won't open, shows shutdown error' as this specific scenario.",
          "Recommend customers keep the DiagnosisV2 utility on hand and always shut down SQL Account properly (not via forced power-off) to avoid recurrence.",
        ],
      },
      {
        title: "How to validate database with SQL Diagnosis Utility",
        minutes: 7,
        points: [
          "Download and install the SQL Accounting Diagnosis utility (a separate installer from sql.com.my/utility), then select the Firebird version matching the customer's setup (commonly Firebird 2.5) and choose Database Validate.",
          "Locate the correct .FDB database file by browsing to the DB folder — the exact folder path can be confirmed via the Firebird service group's Properties in the diagnosis tool itself.",
          "A successful check shows 'Database Validation Complete'; if instead you get a 'bad parameter' error, that indicates deeper corruption requiring escalation to the SQL helpdesk rather than something fixable client-side.",
          "After a successful validation, back up the database from within the utility, then restore it — this produces a clean copy alongside the original, letting you compare or switch over.",
          "Know the difference between 'Drop Link' (temporarily hides the old DB, recoverable via Find Database) and 'Delete Database' (permanent, unrecoverable) when cleaning up the old copy after a restore — never suggest Delete unless the customer is certain.",
        ],
      },
      {
        title: "SQL Backup Database & Restore Database",
        minutes: 6,
        points: [
          "Regular backups matter for four reasons worth citing to customers: faster disaster recovery, easy historical comparison, protection against ransomware/cybercrime, and easy internal data sharing.",
          "Local backup: File > Backup Database > add a Local Storage location (multiple locations can be selected) > Backup; 'Compress Backup File' zips the output, and 'Best Compression Mode' shrinks it further at the cost of speed.",
          "Local restore: click the '...' button beside Company Name > Restore > browse to the backup file > OK — restoring creates a separate company entry rather than overwriting the original.",
          "SQL AI Cloud Backup is the cloud alternative — same File > Backup Database screen, but Add Cloud Storage and log in via Google; benefits include encrypted storage, regular ransomware screening, and an 'AI Smart Recycle' feature that automatically prunes old daily backups to save cloud space.",
          "Cloud restore works the same way as local restore but via the cloud-icon Restore option, selecting the backup from cloud storage instead of a local file.",
        ],
      },
    ],
    practiceTask: "Create a new user with limited access rights, run the SQL Diagnosis Utility to validate a database, and perform a full backup + restore cycle.",
  },
};
