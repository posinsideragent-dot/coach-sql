// Visual step-by-step demo tutorial for SQL Account support onboarding.
// Screenshots extracted directly from the official SQL Account KB PDFs
// (cdn.sql.com.my) used to build js/tutorials.js. Each lesson here is a
// tight 2-5 step visual sequence covering the key dialogs/menus a support
// agent needs to recognize, instead of the full PDF walkthrough — target
// is ~20 minutes of learning per day.

export const DEMO_STEPS = {
  1: {
    topic: "Orientation & Setup",
    goal: "The new hire understands what SQL Account is and can get a fresh install running end to end.",
    lessons: [
      {
        title: "How to Install SQL Account",
        steps: [
          { image: "assets/tutorials/day1/how-to-install-sql-account/step1.jpg", caption: "Accept the License Agreement in the installer and click Next to continue." },
          { image: "assets/tutorials/day1/how-to-install-sql-account/step2.jpg", caption: "Choose additional setup tasks (desktop icon, Quick Launch icon) and continue the install." },
          { image: "assets/tutorials/day1/how-to-install-sql-account/step3.jpg", caption: "After install, open File > Logon from the main menu to log in to a company." },
          { image: "assets/tutorials/day1/how-to-install-sql-account/step4.jpg", caption: "Use Create New Database (or Create Sample Database) under Management to spin up a fresh demo company." },
          { image: "assets/tutorials/day1/how-to-install-sql-account/step5.jpg", caption: "Log on with the default credentials — username ADMIN, password ADMIN — to enter the new company." },
        ],
      },
      {
        title: "Account Book Registration in SQL",
        steps: [
          { image: "assets/tutorials/day1/account-book-registration-in-sql/step1.jpg", caption: "Go to File > Company Profile to start registration." },
          { image: "assets/tutorials/day1/account-book-registration-in-sql/step2.jpg", caption: "Fill in the company's exact name and address, then click the diskette icon to save — punctuation must match exactly since activation is issued against these details." },
          { image: "assets/tutorials/day1/account-book-registration-in-sql/step3.jpg", caption: "Go to File > Product Activation to open the activation request screen." },
          { image: "assets/tutorials/day1/account-book-registration-in-sql/step4.jpg", caption: "Click Print Activation Request, then export it to PDF to email to the local sales agent." },
          { image: "assets/tutorials/day1/account-book-registration-in-sql/step5.jpg", caption: "When the code arrives, key it in and confirm Digit A and Digit B match exactly before clicking Register." },
        ],
      },
      {
        title: "How to Register Your New Company and Change Company Address",
        steps: [
          { image: "assets/tutorials/day1/how-to-register-your-new-company-and-change-company-address/step1.jpg", caption: "Open File > Product Activation to begin (or re-run) the registration/activation request." },
          { image: "assets/tutorials/day1/how-to-register-your-new-company-and-change-company-address/step2.jpg", caption: "Confirm the company name and address shown, note Digit A, then click Print Activation Request — the same flow is repeated with the new address when a company has moved and needs re-registration." },
        ],
      },
      {
        title: "How To Activate License",
        steps: [
          { image: "assets/tutorials/day1/how-to-activate-license/step1.jpg", caption: "Under the Tools menu, open Logon while logged in as ADMIN to begin activation." },
          { image: "assets/tutorials/day1/how-to-activate-license/step2.jpg", caption: "In the Company Profile screen, paste the Company Name and Address exactly as shown in the vendor's license PDF — don't retype them." },
          { image: "assets/tutorials/day1/how-to-activate-license/step3.jpg", caption: "Open File > Product Activation from the menu." },
          { image: "assets/tutorials/day1/how-to-activate-license/step4.jpg", caption: "In the Export menu of the activation screen, choose Export to PDF file to generate the activation request document." },
          { image: "assets/tutorials/day1/how-to-activate-license/step5.jpg", caption: "Paste the Product ID and Activation Code from the vendor, confirm Digit A/Digit B match, then click Register." },
        ],
      },
      {
        title: "Network Setting",
        steps: [
          { image: "assets/tutorials/day1/network-setting/step1.jpg", caption: "Download and install Firebird Server matching the OS bitness (32-bit or 64-bit) on the server PC." },
          { image: "assets/tutorials/day1/network-setting/step2.jpg", caption: "During Firebird setup, choose SuperServer mode and run it as a Service so it starts automatically." },
          { image: "assets/tutorials/day1/network-setting/step3.jpg", caption: "Set a SYSDBA password for the Firebird database system administrator during install." },
          { image: "assets/tutorials/day1/network-setting/step4.jpg", caption: "On each client PC, use Add Group and browse the network to the server's shared Default.DCF file to connect." },
          { image: "assets/tutorials/day1/network-setting/step5.jpg", caption: "Once connected, the SQL Financial Accounting Database Group screen lists the shared company database — this confirms the client can see the server." },
        ],
      },
      {
        title: "Enlarging UI Screen in SQL",
        steps: [
          { image: "assets/tutorials/day1/enlarging-ui-screen-in-sql/step1.jpg", caption: "Right-click the desktop and choose Display settings — this is a Windows setting, not an in-app option." },
          { image: "assets/tutorials/day1/enlarging-ui-screen-in-sql/step2.jpg", caption: "Windows 10: under Display, drag \"Change the size of text, apps, and other items\" to 125%/150%/200%." },
          { image: "assets/tutorials/day1/enlarging-ui-screen-in-sql/step3.jpg", caption: "Windows 7/8/Vista: use the equivalent \"Change the size of all items\" scaling slider under Personalize > Display." },
          { image: "assets/tutorials/day1/enlarging-ui-screen-in-sql/step4.jpg", caption: "Windows XP: Display Properties > Settings > Advanced lets you pick a preset DPI (Normal/Large) or a Custom setting." },
          { image: "assets/tutorials/day1/enlarging-ui-screen-in-sql/step5.jpg", caption: "The Custom DPI Setting dialog lets you drag to an exact scale percentage for very fine control." },
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
        steps: [
          { image: "assets/tutorials/day2/customer-payment-guide-local-multi-currency/step1.jpg", caption: "Maintain Customer shows the customer's default currency — this determines whether a payment is same-currency or multi-currency." },
          { image: "assets/tutorials/day2/customer-payment-guide-local-multi-currency/step2.jpg", caption: "For a local-currency customer, open Customer Payment Entry, tick the invoice in Knock Off Grid, and confirm the Pay amount." },
          { image: "assets/tutorials/day2/customer-payment-guide-local-multi-currency/step3.jpg", caption: "For a foreign-currency invoice paid in local currency, the system auto-calculates the currency rate to knock off the payment." },
          { image: "assets/tutorials/day2/customer-payment-guide-local-multi-currency/step4.jpg", caption: "The Local Amount field updates based on the exchange rate at payment date — a forex gain/loss is expected if it differs from the invoice date's rate." },
          { image: "assets/tutorials/day2/customer-payment-guide-local-multi-currency/step5.jpg", caption: "For a same-currency foreign payment (e.g. USD invoice paid in USD), select the matching USD bank account so the currency-rate field becomes editable." },
        ],
      },
      {
        title: "Customer Contra and Supplier Contra",
        steps: [
          { image: "assets/tutorials/day2/customer-contra-and-supplier-contra/step1.jpg", caption: "Before using Contra, confirm Tools > Options > General Ledger has a valid Contra Account configured." },
          { image: "assets/tutorials/day2/customer-contra-and-supplier-contra/step2.jpg", caption: "From the Customer menu, choose Customer Contra to start offsetting a sales invoice against a purchase invoice." },
          { image: "assets/tutorials/day2/customer-contra-and-supplier-contra/step3.jpg", caption: "Select the customer, enter the Contra Amount, knock off the relevant invoice, and save — the system auto-generates a Contra Number (e.g. CT-00006)." },
          { image: "assets/tutorials/day2/customer-contra-and-supplier-contra/step4.jpg", caption: "From the Supplier menu, open Supplier Contra to complete the other half of the offset." },
          { image: "assets/tutorials/day2/customer-contra-and-supplier-contra/step5.jpg", caption: "Locate the same Contra Number, enter a matching Contra Amount, knock off the supplier invoice, and save." },
        ],
      },
      {
        title: "Post-Dated Cheque & Bounced Cheque",
        steps: [
          { image: "assets/tutorials/day2/post-dated-cheque-bounced-cheque/step1.jpg", caption: "Start from Customer > Customer Payment to record the cheque as a normal payment." },
          { image: "assets/tutorials/day2/post-dated-cheque-bounced-cheque/step2.jpg", caption: "Right-click near the payment header and choose Set Posting Date to specify the actual future date the cheque clears." },
          { image: "assets/tutorials/day2/post-dated-cheque-bounced-cheque/step3.jpg", caption: "Review pending post-dated cheques via Customer Post Dated Cheque Listing, filtered by payment date." },
          { image: "assets/tutorials/day2/post-dated-cheque-bounced-cheque/step4.jpg", caption: "To mark a cheque as bounced, right-click near the header on the existing payment and select Bounced Status." },
          { image: "assets/tutorials/day2/post-dated-cheque-bounced-cheque/step5.jpg", caption: "The Ledger Report then clearly reflects the reversal on the bounce date, rather than the transaction being deleted." },
        ],
      },
      {
        title: "Open Bank Deposit",
        steps: [
          { image: "assets/tutorials/day2/open-bank-deposit/step1.jpg", caption: "Start from Customer > Customer Payment, where individual cheque payments are normally entered." },
          { image: "assets/tutorials/day2/open-bank-deposit/step2.jpg", caption: "Right-click and choose Open Bank Deposit, then set the deposit date range to search for payments made on that slip." },
          { image: "assets/tutorials/day2/open-bank-deposit/step3.jpg", caption: "Tick all the customer payments that were physically banked together on the same deposit slip, then save." },
          { image: "assets/tutorials/day2/open-bank-deposit/step4.jpg", caption: "At Bank Reconciliation time, set the Bank Statement Date and account, then Apply to bring in transactions to match." },
          { image: "assets/tutorials/day2/open-bank-deposit/step5.jpg", caption: "The same Open Bank Deposit option is also reachable from GL > Cash Book Entry by right-clicking near Payment Voucher." },
        ],
      },
      {
        title: "Cash Drawer Kick Out",
        steps: [
          { image: "assets/tutorials/day2/cash-drawer-kick-out/step1.jpg", caption: "Under Tools > Options > Barcode, choose Direct Kick Out and select the correct COM Port, then test with the Kick Out button." },
          { image: "assets/tutorials/day2/cash-drawer-kick-out/step2.jpg", caption: "If the drawer is wired through the receipt printer instead, switch to Printer Kick Out and select the printer from the list." },
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
        steps: [
          { image: "assets/tutorials/day3/costing-method/step1.jpg", caption: "Costing Method is set per Stock Group under Maintain Stock Group — choose FIFO, Fixed Costing, or Weighted Average." },
          { image: "assets/tutorials/day3/costing-method/step2.jpg", caption: "After changing the method on a group with existing history, run Tools > Analyse Data Integrity so costing reports recalculate correctly from the first transaction date." },
        ],
      },
      {
        title: "Barcode",
        steps: [
          { image: "assets/tutorials/day3/barcode/step1.jpg", caption: "Barcode labels are edited in Report Builder, opened from the relevant document's preview screen." },
          { image: "assets/tutorials/day3/barcode/step2.jpg", caption: "Because labels are small, set the report's measurement units to Millimeters under Report > Units so sizing matches the physical label." },
          { image: "assets/tutorials/day3/barcode/step3.jpg", caption: "In Page Setup, set the custom Paper Size (width/height) to match the physical label dimensions." },
          { image: "assets/tutorials/day3/barcode/step4.jpg", caption: "On the barcode object, set Type to Code 128 (the common default) and configure the Bar Width to match the scanner/printer." },
          { image: "assets/tutorials/day3/barcode/step5.jpg", caption: "An event handler on DetailBeforePrint controls how many labels print per line item — one per unit of quantity." },
        ],
      },
      {
        title: "Stock Adjustment & Stock Take",
        steps: [
          { image: "assets/tutorials/day3/stock-adjustment-stock-take/step1.jpg", caption: "From the Stock menu, choose Print Stock Physical Worksheet to generate the count sheet for warehouse staff." },
          { image: "assets/tutorials/day3/stock-adjustment-stock-take/step2.jpg", caption: "Filter the worksheet by date/group/location/batch, then click Apply to pull in the current stock list." },
          { image: "assets/tutorials/day3/stock-adjustment-stock-take/step3.jpg", caption: "Preview and print the Stock Take Sheet for staff to fill in actual counted (Physical) quantities by hand." },
          { image: "assets/tutorials/day3/stock-adjustment-stock-take/step4.jpg", caption: "Open the Stock Physical Worksheet and Stock Adjustment side by side (Window > Tile Vertical) to compare both screens." },
          { image: "assets/tutorials/day3/stock-adjustment-stock-take/step5.jpg", caption: "Select the counted rows and drag-and-drop them into Stock Adjustment — Qty auto-fills as the variance between Physical and Book quantity." },
        ],
      },
      {
        title: "Maintain Stock Item - Reorder Level & Reorder Qty",
        steps: [
          { image: "assets/tutorials/day3/maintain-stock-item-reorder-level-reorder-qty/step1.jpg", caption: "In Maintain Stock Item, set the Reorder Level (threshold) and Reorder Qty (how much to order when hit)." },
          { image: "assets/tutorials/day3/maintain-stock-item-reorder-level-reorder-qty/step2.jpg", caption: "When balance quantity drops below the reorder level, saving a document triggers a Stock Quantity Control warning dialog." },
          { image: "assets/tutorials/day3/maintain-stock-item-reorder-level-reorder-qty/step3.jpg", caption: "Print Stock Reorder Advise generates a report of items below threshold, comparing On Hand Qty against Reorder Level, Min, or Max." },
          { image: "assets/tutorials/day3/maintain-stock-item-reorder-level-reorder-qty/step4.jpg", caption: "Items can be shift-selected in Reorder Advise and dragged directly into a New Purchase Order, auto-filling the Reorder Qty." },
        ],
      },
      {
        title: "Multi Location Module",
        steps: [
          { image: "assets/tutorials/day3/multi-location-module/step1.jpg", caption: "A Purchase Invoice can specify a Location field so goods are received directly into a specific branch/warehouse." },
          { image: "assets/tutorials/day3/multi-location-module/step2.jpg", caption: "The Stock Card report then shows movement split out by that location." },
          { image: "assets/tutorials/day3/multi-location-module/step3.jpg", caption: "For consignment, a Stock Transfer document moves goods from the default warehouse to a customer's consignment location without billing." },
          { image: "assets/tutorials/day3/multi-location-module/step4.jpg", caption: "Later, billing only happens for quantity actually sold — the Invoice is issued from the customer's consignment location." },
          { image: "assets/tutorials/day3/multi-location-module/step5.jpg", caption: "The Stock Card confirms the movement between locations, matching what was transferred and what was billed." },
        ],
      },
      {
        title: "Serial No Module",
        steps: [
          { image: "assets/tutorials/day3/serial-no-module/step1.jpg", caption: "Turn on serial tracking per item: Maintain Stock Item > Edit > tick Serial No." },
          { image: "assets/tutorials/day3/serial-no-module/step2.jpg", caption: "Serial numbers can be imported from a Notepad/Word list — one serial number per line." },
          { image: "assets/tutorials/day3/serial-no-module/step3.jpg", caption: "Or entered manually one at a time on the Goods Received Note / Delivery Order." },
          { image: "assets/tutorials/day3/serial-no-module/step4.jpg", caption: "A confirmation dialog like \"Done\" appears once the serial numbers are successfully applied to the document." },
          { image: "assets/tutorials/day3/serial-no-module/step5.jpg", caption: "The Add Serial Number picker lets staff tick specific serials to issue out — mismatches here are the most common serial-number support ticket." },
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
        steps: [
          { image: "assets/tutorials/day4/bank-reconciliation/step1.jpg", caption: "Open GL > Bank Reconciliation, select the Bank Statement Date and account, then click Check Bank Recon." },
          { image: "assets/tutorials/day4/bank-reconciliation/step2.jpg", caption: "GL Bank Reconciliation Listing shows prior reconciliations and whether they're in balance." },
          { image: "assets/tutorials/day4/bank-reconciliation/step3.jpg", caption: "Set the Display Period and useful filters (Show Unticked Transaction, Merge Bank Charges), then click Apply to pull in transactions." },
          { image: "assets/tutorials/day4/bank-reconciliation/step4.jpg", caption: "Manually tick each system transaction that matches a line on the physical bank statement, then save." },
          { image: "assets/tutorials/day4/bank-reconciliation/step5.jpg", caption: "Press F6 (or Preview) to generate the Bank Reconciliation Report — hand this to a customer asking to prove their books match the bank." },
        ],
      },
      {
        title: "Auto Bank Reconciliation",
        steps: [
          { image: "assets/tutorials/day4/auto-bank-reconciliation/step1.jpg", caption: "Same starting point as manual recon: GL > Bank Reconciliation > New, then use Load Statement." },
          { image: "assets/tutorials/day4/auto-bank-reconciliation/step2.jpg", caption: "Browse to the actual bank statement file exported from online banking (PDF or CSV)." },
          { image: "assets/tutorials/day4/auto-bank-reconciliation/step3.jpg", caption: "The system detects the bank name from the file and asks for confirmation before proceeding." },
          { image: "assets/tutorials/day4/auto-bank-reconciliation/step4.jpg", caption: "Matched transactions get auto-ticked based on cheque number + amount or description + amount." },
          { image: "assets/tutorials/day4/auto-bank-reconciliation/step5.jpg", caption: "Transactions that can't be auto-matched are flagged — click the unmatched line and search by same DR/CR amount to match manually." },
        ],
      },
      {
        title: "Trial Balance not Tally",
        steps: [
          { image: "assets/tutorials/day4/trial-balance-not-tally/step1.jpg", caption: "First check: GL > Maintain Chart of Account — Retained Earnings must have exactly one account code assigned." },
          { image: "assets/tutorials/day4/trial-balance-not-tally/step2.jpg", caption: "Second check: GL > Maintain Opening Balance — untick Project and confirm total Local DR equals Local CR at the bottom." },
        ],
      },
      {
        title: "Guide to Calculate Profit & Loss Percentage",
        steps: [
          { image: "assets/tutorials/day4/guide-to-calculate-profit-loss-percentage/step1.jpg", caption: "Every P&L percentage column (Sales %, Gross Profit %, etc.) uses the same formula: (Account Amount ÷ Total Sales) × 100." },
          { image: "assets/tutorials/day4/guide-to-calculate-profit-loss-percentage/step2.jpg", caption: "The same formula continues down through Expenses % and Net Profit % — percentages round to 1 decimal place by default, explaining small rounding differences customers notice." },
        ],
      },
      {
        title: "Fast Report - Basic Guide",
        steps: [
          { image: "assets/tutorials/day4/fast-report-basic-guide/step1.jpg", caption: "A report layout in Report Designer is built from bands — Group Header/Footer, Master Data, Detail Data, and Page Footer." },
          { image: "assets/tutorials/day4/fast-report-basic-guide/step2.jpg", caption: "Use the alignment tools to align objects: click the first object as the anchor, then Shift-click the rest to line them up." },
          { image: "assets/tutorials/day4/fast-report-basic-guide/step3.jpg", caption: "An Overlay region can be added over a band to control layered content like watermarks or stamps." },
          { image: "assets/tutorials/day4/fast-report-basic-guide/step4.jpg", caption: "The Expression Editor lets you build conditional filters (e.g. filtering leave types) using available datasets and fields." },
          { image: "assets/tutorials/day4/fast-report-basic-guide/step5.jpg", caption: "Toggle \"Allow Expressions\" on a field's edit menu to enable script-driven formatting on that object." },
        ],
      },
      {
        title: "RTM Report: How to Change 6% to 0%",
        steps: [
          { image: "assets/tutorials/day4/rtm-report-how-to-change-6-to-0/step1.jpg", caption: "A standard sales invoice report correctly shows GST Amt @ 6% based on the invoice date." },
          { image: "assets/tutorials/day4/rtm-report-how-to-change-6-to-0/step2.jpg", caption: "The underlying script (lbTaxAmtOnGetText) compares the invoice's TaxDate against the GST cutover date to decide 6% vs 0% text." },
          { image: "assets/tutorials/day4/rtm-report-how-to-change-6-to-0/step3.jpg", caption: "After the cutover, the same report correctly displays GST Amt @ 0% for a later invoice date." },
          { image: "assets/tutorials/day4/rtm-report-how-to-change-6-to-0/step4.jpg", caption: "On a customized report, this logic must be manually re-applied via View > Events in Report Designer." },
          { image: "assets/tutorials/day4/rtm-report-how-to-change-6-to-0/step5.jpg", caption: "A related fix: an OnGetText script (DBTxtTaxOnGetText) that forces a blank tax amount to display as '0.00' instead of blank." },
        ],
      },
      {
        title: "How to do Rounding Report",
        steps: [
          { image: "assets/tutorials/day4/how-to-do-rounding-report/step1.jpg", caption: "An invoice with a hidden line item code (e.g. RTN5Cents) captures the cash-rounding adjustment separately from normal items." },
          { image: "assets/tutorials/day4/how-to-do-rounding-report/step2.jpg", caption: "In Report Designer, a custom SQL query bound in the Calc module (run onCreate/onBeforePrint) pulls in the rounding amount." },
          { image: "assets/tutorials/day4/how-to-do-rounding-report/step3.jpg", caption: "The report preview shows the invoice total rounded cleanly, with the rounding line summed separately." },
          { image: "assets/tutorials/day4/how-to-do-rounding-report/step4.jpg", caption: "The rounding item's detail region is set to No Fill / hidden so it doesn't clutter the printed item list." },
          { image: "assets/tutorials/day4/how-to-do-rounding-report/step5.jpg", caption: "An OnPrint event on the region controls visibility — hiding the rounding code (RTN5Cents) from the visible printed list." },
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
        steps: [
          { image: "assets/tutorials/day5/create-a-new-user-access-control-reset-password/step1.jpg", caption: "Under Tools, open Maintain User to create or manage users." },
          { image: "assets/tutorials/day5/create-a-new-user-access-control-reset-password/step2.jpg", caption: "In the User screen, use the More button to reach Access Control, Reset Password, and other options." },
          { image: "assets/tutorials/day5/create-a-new-user-access-control-reset-password/step3.jpg", caption: "Reset Password generates a temporary password that can be copied to clipboard for the user." },
          { image: "assets/tutorials/day5/create-a-new-user-access-control-reset-password/step4.jpg", caption: "The user logs on with the temporary password on the SQL Account login screen." },
          { image: "assets/tutorials/day5/create-a-new-user-access-control-reset-password/step5.jpg", caption: "They're then prompted to set a new permanent password on first login, confirming the change succeeded." },
        ],
      },
      {
        title: "Password Policy (with 2 steps Verification)",
        steps: [
          { image: "assets/tutorials/day5/password-policy-with-2-steps-verification/step1.jpg", caption: "Company-wide rules live under Tools > Options > Password Policy — Maximum Password Age, Minimum Length, Password History, and required character mix." },
          { image: "assets/tutorials/day5/password-policy-with-2-steps-verification/step2.jpg", caption: "New-user resets use the same More > Reset Password flow as standard password resets." },
          { image: "assets/tutorials/day5/password-policy-with-2-steps-verification/step3.jpg", caption: "Two-Step Verification is enabled per user under File > 2-Steps Verification, starting with the current password." },
          { image: "assets/tutorials/day5/password-policy-with-2-steps-verification/step4.jpg", caption: "The user then links an authenticator app on their phone (iPhone, Android, or Windows Phone)." },
          { image: "assets/tutorials/day5/password-policy-with-2-steps-verification/step5.jpg", caption: "After that, every login requires a time-based verification code from the authenticator app." },
        ],
      },
      {
        title: "Maintain User",
        steps: [
          { image: "assets/tutorials/day5/maintain-user/step1.jpg", caption: "Full user setup lives under Tools > Maintain User in the main menu." },
          { image: "assets/tutorials/day5/maintain-user/step2.jpg", caption: "Create the user with New, assign a Code/Name, and Save; passwords are set via More > Change Password." },
          { image: "assets/tutorials/day5/maintain-user/step3.jpg", caption: "Access Control uses a four-tier permission model per module — Execute, New, Edit, and Delete — plus Grant/Revoke actions to apply them." },
          { image: "assets/tutorials/day5/maintain-user/step4.jpg", caption: "Export Access Right saves an existing user's permissions to an XML file." },
          { image: "assets/tutorials/day5/maintain-user/step5.jpg", caption: "Import Access Rights on a new user then copies those permissions over instead of re-configuring from scratch — confirm the overwrite warning to proceed." },
        ],
      },
      {
        title: "Fix Database Shutdown Error",
        steps: [
          { image: "assets/tutorials/day5/fix-database-shutdown-error/step1.jpg", caption: "Launch SQL Diagnosis V2 and click Database Online — this is the dedicated tool for a database stuck showing a shutdown error." },
          { image: "assets/tutorials/day5/fix-database-shutdown-error/step2.jpg", caption: "Select the affected database file and run it — \"Database Back Online\" confirms the shutdown state was cleared." },
        ],
      },
      {
        title: "How to validate database with SQL Diagnosis Utility",
        steps: [
          { image: "assets/tutorials/day5/how-to-validate-database-with-sql-diagnosis-utility/step1.jpg", caption: "Open SQL Accounting Diagnosis and click Database Validate." },
          { image: "assets/tutorials/day5/how-to-validate-database-with-sql-diagnosis-utility/step2.jpg", caption: "Choose the Firebird version matching the customer's setup (commonly Firebird 2.5)." },
          { image: "assets/tutorials/day5/how-to-validate-database-with-sql-diagnosis-utility/step3.jpg", caption: "Browse the SQL Financial Accounting Database screen to confirm the exact .FDB file location being validated." },
          { image: "assets/tutorials/day5/how-to-validate-database-with-sql-diagnosis-utility/step4.jpg", caption: "Click Validate, then Backup — \"Database Validation Complete\" confirms a clean check; a \"bad parameter\" error means escalate to the SQL helpdesk." },
          { image: "assets/tutorials/day5/how-to-validate-database-with-sql-diagnosis-utility/step5.jpg", caption: "After a successful backup+restore, the old and new copies sit side by side — use Drop Database Link (recoverable) rather than Delete Database (permanent) when cleaning up." },
        ],
      },
      {
        title: "SQL Backup Database & Restore Database",
        steps: [
          { image: "assets/tutorials/day5/sql-backup-database-restore-database/step1.jpg", caption: "From the main menu, go to File > Backup Database to start a backup." },
          { image: "assets/tutorials/day5/sql-backup-database-restore-database/step2.jpg", caption: "Use the Restore link under Housekeeping to restore from a backup file." },
          { image: "assets/tutorials/day5/sql-backup-database-restore-database/step3.jpg", caption: "Restoring creates a separate company entry in the database list rather than overwriting the original." },
          { image: "assets/tutorials/day5/sql-backup-database-restore-database/step4.jpg", caption: "When backing up, toggle Compress Backup File (and Best Compression Mode for a smaller file at the cost of speed), then click Backup." },
          { image: "assets/tutorials/day5/sql-backup-database-restore-database/step5.jpg", caption: "The new backed-up/restored company now appears alongside the original in the database list, ready to compare or switch to." },
        ],
      },
    ],
    practiceTask: "Create a new user with limited access rights, run the SQL Diagnosis Utility to validate a database, and perform a full backup + restore cycle.",
  },
};
