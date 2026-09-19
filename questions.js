// Auto-generated from the SQL Account Support Notion knowledge base.
// 50 hard MCQ questions, 10 per onboarding day, equal-length confusable choices.
export const QUESTIONS = [
  {
    "day": 1,
    "topic": "Orientation & Setup",
    "q": "A client is already on an older SQL Account version and wants the newest version while keeping all existing data. Which action is correct?",
    "options": [
      "Follow the official upgrade steps, after first taking a full backup of the data",
      "Follow the official reinstall steps, after first taking a full backup of the data",
      "Follow the official patch steps, after first taking a full backup of the license",
      "Follow the official restore steps, after first taking a full backup of the setup"
    ],
    "correct": 0,
    "why": "Moving to a newer version while keeping data is an upgrade, not a reinstall (same version), a patch (a fix, not a version move), or a restore (recovering from a backup, not advancing versions)."
  },
  {
    "day": 1,
    "topic": "Orientation & Setup",
    "q": "Which detail, entered when registering a new company book, determines when the accounting year resets for reporting purposes?",
    "options": [
      "The company's registered postal address on file",
      "The company's chosen financial year start date",
      "The company's activated software license key",
      "The company's assigned user access control list"
    ],
    "correct": 1,
    "why": "The financial year start date drives the reporting year reset; address, license, and access rights don't affect the accounting calendar."
  },
  {
    "day": 1,
    "topic": "Orientation & Setup",
    "q": "A firm needs to push one identical SQL Account setup file onto forty new PCs at once. Which capability is built for this exact job?",
    "options": [
      "Centralized Management and Deployment of Setup Files",
      "Centralized Replication and Cloning of Master Data",
      "Centralized Configuration and Sharing of Network Setting",
      "Centralized Backup and Restoration of Company Data"
    ],
    "correct": 0,
    "why": "Clone Master Data copies customer/stock records into a company book; Network Setting configures shared access; backup/restore moves data \u2014 none of these push a setup file to many machines the way deployment management does."
  },
  {
    "day": 1,
    "topic": "Orientation & Setup",
    "q": "Before performing a major system change such as an upgrade or a database patch, what should always be done first?",
    "options": [
      "Run a full stock take across every branch and location",
      "Run a full data backup of the live company database",
      "Run a full price review across every stock item listed",
      "Run a full audit of every user's access control rights"
    ],
    "correct": 1,
    "why": "The rule is backup before any risky change; stock takes, price reviews, and access audits are unrelated precautions that don't protect against data loss."
  },
  {
    "day": 1,
    "topic": "Orientation & Setup",
    "q": "A client wants to know what CP58 relates to, in the Malaysian tax context this KB article covers.",
    "options": [
      "A statement of payment made to an agent, dealer, or distributor",
      "A statement of payment made to a landlord, tenant, or guarantor",
      "A statement of payment made to a supplier, vendor, or contractor",
      "A statement of payment made to an employee, director, or trustee"
    ],
    "correct": 0,
    "why": "CP58 specifically covers payments to agents, dealers, and distributors, not generic supplier, landlord, or payroll payments."
  },
  {
    "day": 1,
    "topic": "Orientation & Setup",
    "q": "A fresh SQL Account install is still running in trial mode with functional limits. What is required to remove those limits?",
    "options": [
      "Registering the company's official financial year dates",
      "Activating the software using a valid purchased license",
      "Enlarging the display so the interface reads more clearly",
      "Cloning the master data from an existing company book"
    ],
    "correct": 1,
    "why": "Only license activation lifts trial/demo limitations; registering the year, resizing the UI, or cloning data don't touch licensing at all."
  },
  {
    "day": 1,
    "topic": "Orientation & Setup",
    "q": "A client switching from UBS accounting software wants their existing records carried over. Which guide should you point them to first?",
    "options": [
      "The Import UBS Guide, covering data brought over from UBS",
      "The MYOB Migration Guide, covering data brought over from MYOB",
      "The Clone Master Data Guide, covering data copied within SQL",
      "The Network Setting Guide, covering shared multi-user access"
    ],
    "correct": 0,
    "why": "The MYOB guide, clone-master-data feature, and network setting all handle different jobs \u2014 only the UBS-specific import guide matches a client actually coming from UBS."
  },
  {
    "day": 1,
    "topic": "Orientation & Setup",
    "q": "A user on a very high-resolution monitor complains that all the SQL Account text and icons look far too small to read. What fixes this?",
    "options": [
      "Adjusting the printer driver used for receipts and labels",
      "Adjusting the Network Setting used for multi-user access",
      "Adjusting the display through the Enlarging UI Screen option",
      "Adjusting the Access Control rights granted to that account"
    ],
    "correct": 2,
    "why": "Tiny text from a high-DPI screen is a display-scaling issue solved by the Enlarging UI Screen setting, not by printer, network, or permission settings."
  },
  {
    "day": 1,
    "topic": "Orientation & Setup",
    "q": "A brand-new user forgets their password before they have ever logged in for the first time after install. What resource applies?",
    "options": [
      "The two-step verification screen shown at every login attempt",
      "The Reset Password Form and its accompanying reset procedure",
      "The Access Control screen used to assign module permissions",
      "The Centralized Deployment tool used to push new setup files"
    ],
    "correct": 1,
    "why": "This is a plain password-reset situation, covered by the reset form and steps \u2014 not two-step verification, permission assignment, or deployment tooling."
  },
  {
    "day": 1,
    "topic": "Orientation & Setup",
    "q": "A support agent wants to know why a company might legitimately run two different SQL Account versions on the very same PC.",
    "options": [
      "To keep one legacy company on its old version during a gradual move",
      "To keep one demo company available for staff training on new hires",
      "To keep one backup company synced in case the live file gets lost",
      "To keep one cloned company mirrored across every branch location"
    ],
    "correct": 0,
    "why": "The KB reason is version compatibility for a legacy company during migration \u2014 the training-demo, backup-sync, and multi-branch-mirroring reasons are all plausible-sounding but not the stated purpose."
  },
  {
    "day": 2,
    "topic": "Sales & Customer",
    "q": "A customer is also, separately, one of your suppliers, and both balances need to be offset against each other. Which entry type applies?",
    "options": [
      "A discount entry reducing the agreed price on one side only",
      "A contra entry netting the customer and supplier balances",
      "A credit note entry reversing part of one issued invoice",
      "An advance entry recording a deposit against future orders"
    ],
    "correct": 1,
    "why": "Netting a customer balance against a supplier balance for the same counterparty is specifically a contra entry, not a discount, credit note, or advance."
  },
  {
    "day": 2,
    "topic": "Sales & Customer",
    "q": "An invoice was issued in USD, and the exchange rate has since moved, but the customer has not yet paid it. What kind of gain or loss exists right now?",
    "options": [
      "A realized gain or loss, since the rate has already changed",
      "An unrealised gain or loss, since the amount is unsettled",
      "A realized gain or loss, since the invoice is still open now",
      "An unrealised gain or loss, since the invoice was closed now"
    ],
    "correct": 1,
    "why": "Gain or loss stays unrealised until the amount is actually settled; an unpaid invoice cannot produce a realized figure regardless of rate movement."
  },
  {
    "day": 2,
    "topic": "Sales & Customer",
    "q": "A customer's cheque, already recorded as a payment against an invoice, bounces at the bank. What is the correct next action?",
    "options": [
      "Delete the customer record so the balance no longer shows",
      "Reverse the payment so the invoice becomes unpaid once more",
      "Apply a discount so the invoice balance matches the shortfall",
      "Ignore the bounce, since the invoice already shows as settled"
    ],
    "correct": 1,
    "why": "A bounced cheque must be reversed or reallocated so the invoice reopens; deleting the customer, applying a discount, or ignoring it all leave the books wrong."
  },
  {
    "day": 2,
    "topic": "Sales & Customer",
    "q": "A business pays sales staff commission strictly on cash actually collected from customers, not on invoices simply issued. Which report supports this?",
    "options": [
      "The Customer Payment Listing Commission report by collection",
      "The Sales by Salesman Listing report by invoice issue date",
      "The Debtor Aging Analysis report by outstanding balance age",
      "The Sales Commission Forecast report by quoted order value"
    ],
    "correct": 0,
    "why": "Only the payment-listing commission report ties incentive to money collected; the other three report on issued sales, aging balances, or forecasts, not actual collections."
  },
  {
    "day": 2,
    "topic": "Sales & Customer",
    "q": "Cash and cheques a cashier has collected are sitting uncounted toward the bank statement, waiting to be physically deposited. What best describes this state?",
    "options": [
      "The receipts sit as an open bank deposit, awaiting lodgement",
      "The receipts sit as a bank reconciliation, awaiting matching",
      "The receipts sit as a foreign bank adjustment, awaiting a rate",
      "The receipts sit as a customer contra, awaiting confirmation"
    ],
    "correct": 0,
    "why": "Money collected but not yet lodged is exactly what an open bank deposit tracks; reconciliation, forex adjustment, and contra all describe different situations entirely."
  },
  {
    "day": 2,
    "topic": "Sales & Customer",
    "q": "A retail cashier wants the till drawer to pop open automatically the moment a sale is completed at the counter. Which feature covers this?",
    "options": [
      "The Barcode Scanner Configuration used to speed up item lookup",
      "The Auto Print Receipt setting used to skip a manual print step",
      "The Cash Drawer Kick Out feature used to trigger the till drawer",
      "The POS Terminal Layout setting used to arrange screen buttons"
    ],
    "correct": 2,
    "why": "Automatically opening the drawer after a sale is the Cash Drawer Kick Out feature; the other three affect scanning, printing, and screen layout, not the drawer itself."
  },
  {
    "day": 2,
    "topic": "Sales & Customer",
    "q": "A manager traveling abroad needs to approve a pending sales document without being physically in the office. Which feature enables this?",
    "options": [
      "The Access Control module restricting which screens are seen",
      "The Online Mobile Approval feature for remote document sign-off",
      "The Two-Step Verification screen shown on every login attempt",
      "The Maintain User module used to create new staff accounts"
    ],
    "correct": 1,
    "why": "Remote sign-off of a pending document is what Online Mobile Approval is for; access control, login verification, and user creation don't let anyone approve anything remotely."
  },
  {
    "day": 2,
    "topic": "Sales & Customer",
    "q": "A business wants to scan a Malaysian IC to quickly capture and verify a new customer's identity details during registration. Which feature applies?",
    "options": [
      "Maintain Customer using MyKard Reader, scanning the physical IC",
      "Maintain Customer Credit Limit, checking the customer's history",
      "Maintain Customer Serial Tracking, logging each unit they bought",
      "Maintain Customer Access Rights, restricting their portal access"
    ],
    "correct": 0,
    "why": "Scanning a MyKad for identity capture is exactly the MyKard Reader feature; credit limit, serial tracking, and portal access rights are unrelated customer functions."
  },
  {
    "day": 2,
    "topic": "Sales & Customer",
    "q": "A customer has clearly overpaid an invoice. Which pair of responses is a reasonable way to handle the excess amount?",
    "options": [
      "Keep it as a credit for later use, or refund the excess amount",
      "Keep it as a bad debt write-off, or delete the excess amount",
      "Keep it as an unrealised gain, or convert the excess to stock",
      "Keep it as a supplier contra, or void the whole original invoice"
    ],
    "correct": 0,
    "why": "An overpayment is normally kept as a credit/advance or refunded; writing it off as bad debt, treating it as forex gain, or voiding the invoice all misrepresent what actually happened."
  },
  {
    "day": 2,
    "topic": "Sales & Customer",
    "q": "A foreign-currency customer cheque bounces. How does reversing this differ from reversing a bounced local-currency cheque?",
    "options": [
      "The exchange rate and gain-loss impact must also be reversed",
      "The customer's credit limit must also be permanently reduced",
      "The original sales invoice must also be fully voided and reissued",
      "The commission already paid to staff must also be clawed back"
    ],
    "correct": 0,
    "why": "A forex bounce also carries an exchange-rate gain/loss that must be unwound, unlike a local bounce; credit limits, invoice voiding, and commission clawback aren't part of the reversal itself."
  },
  {
    "day": 3,
    "topic": "Stock & Inventory",
    "q": "A business wants a separate stock threshold, per warehouse, that flags exactly when that branch should reorder an item. Which setting is this?",
    "options": [
      "Stock Reorder Level by Location, set per individual warehouse",
      "Multi Location Module, tracking quantity and value per warehouse",
      "Global Price Change, updating item prices across every warehouse",
      "Batch Edit Value, updating one field across many stock items"
    ],
    "correct": 0,
    "why": "A per-branch reorder threshold is Reorder Level by Location; Multi Location just tracks stock figures per site, Global Price Change touches pricing, and Batch Edit Value touches arbitrary fields."
  },
  {
    "day": 3,
    "topic": "Stock & Inventory",
    "q": "A high-value item, such as a piece of equipment, needs its warranty tracked against the exact individual unit sold. Which module fits?",
    "options": [
      "The Batch Tracking module, grouping units by production lot",
      "The Serial No Module, tracking each individual unit separately",
      "The Multi Location Module, tracking stock across each branch",
      "The Barcode Module, generating a scannable label per item type"
    ],
    "correct": 1,
    "why": "Warranty tied to one specific unit needs serial-level tracking, not lot-level batch tracking, per-branch location tracking, or generic barcode labeling."
  },
  {
    "day": 3,
    "topic": "Stock & Inventory",
    "q": "A business wants to raise the selling price of hundreds of stock items by five percent, all in a single operation. Which feature is built for this?",
    "options": [
      "Global Price Change, applying one percentage across many items",
      "Stock Adjustment, correcting item quantities after a discrepancy",
      "Batch Edit Value, updating a chosen field across many stock items",
      "Fast Report, redesigning how a printed price list is formatted"
    ],
    "correct": 0,
    "why": "A bulk percentage price update is exactly what Global Price Change does; stock adjustment corrects quantities, batch edit touches other fields, and Fast Report only changes how things print."
  },
  {
    "day": 3,
    "topic": "Stock & Inventory",
    "q": "A stock take finds fewer physical units on hand than the system currently records for an item. What is the correct next step?",
    "options": [
      "Post a Stock Adjustment reducing the system quantity to match",
      "Post a Global Price Change reducing the item's listed price",
      "Post a Batch Edit Value reducing the item's expiry date field",
      "Post a Reorder Level change reducing the item's reorder point"
    ],
    "correct": 0,
    "why": "Reconciling counted stock to the system is a Stock Adjustment; price changes, batch field edits, and reorder settings don't correct a quantity discrepancy at all."
  },
  {
    "day": 3,
    "topic": "Stock & Inventory",
    "q": "A food distributor needs to trace exactly which delivery lot a defective item came from, down to its expiry date. Which feature applies here?",
    "options": [
      "Serial No tracking, identifying the single unit that was defective",
      "Batch tracking, identifying the delivery lot and its expiry date",
      "Multi Location tracking, identifying which branch shipped the item",
      "Reorder Level tracking, identifying when that item was last ordered"
    ],
    "correct": 1,
    "why": "Tracing a delivery lot and expiry is exactly what batch tracking is for; serial tracking is per-unit, location tracking is per-branch, and reorder tracking is about restock timing."
  },
  {
    "day": 3,
    "topic": "Stock & Inventory",
    "q": "Which accounting concern does the choice of stock costing method, such as FIFO versus weighted average, most directly affect?",
    "options": [
      "The accuracy of cost of goods sold and reported profit figures",
      "The accuracy of customer credit limits set for repeat buyers",
      "The accuracy of commission owed to staff on completed sales",
      "The accuracy of exchange rates applied to foreign transactions"
    ],
    "correct": 0,
    "why": "Costing method changes how issued stock is valued, which flows straight into cost of goods sold and profit \u2014 not credit limits, commission, or exchange rates."
  },
  {
    "day": 3,
    "topic": "Stock & Inventory",
    "q": "A client accidentally ran a Global Price Change with the wrong percentage, affecting hundreds of stock items at once. What is the recommended recovery step?",
    "options": [
      "Restore from a recent backup taken just before the change ran",
      "Run a fresh Stock Take to recount every affected item's quantity",
      "Run the Analyse Data Integrity tool across the whole company file",
      "Reduce every item's reorder level until prices settle back down"
    ],
    "correct": 0,
    "why": "The clean fix for a bulk price mistake is restoring the pre-change backup; recounting quantities, running an integrity check, or touching reorder levels won't undo mispriced items."
  },
  {
    "day": 3,
    "topic": "Stock & Inventory",
    "q": "A business operates three branches, each holding its own separate stock of the exact same item. Which module correctly tracks this per branch?",
    "options": [
      "The Multi Location Module, splitting quantity and value by site",
      "The Project Module, splitting income and cost by job or contract",
      "The Serial No Module, splitting tracking by individual unit sold",
      "The Reorder Level Module, splitting thresholds by item category"
    ],
    "correct": 0,
    "why": "Per-branch stock quantity and value is precisely Multi Location's job; Project tracks jobs, Serial No tracks units, and there is no reorder module split by category."
  },
  {
    "day": 3,
    "topic": "Stock & Inventory",
    "q": "A client's barcode labels keep printing at the wrong physical size for the blank label stock they're using. What should be checked first?",
    "options": [
      "The label size measurement configured for that label printer",
      "The item's reorder level, in case it is set unusually high",
      "The item's stock costing method, in case FIFO is misconfigured",
      "The item's Global Price Change history, in case pricing shifted"
    ],
    "correct": 0,
    "why": "Wrong physical print size traces to the label size setting, not reorder levels, costing method, or unrelated pricing history."
  },
  {
    "day": 3,
    "topic": "Stock & Inventory",
    "q": "Setting a reorder level far too low for a genuinely fast-moving item most directly causes which outcome?",
    "options": [
      "Frequent stockouts and lost sales while waiting to restock",
      "Excess working capital tied up sitting unsold on the shelf",
      "Understated cost of goods sold across the full sales period",
      "Overstated customer credit limits applied to repeat buyers"
    ],
    "correct": 0,
    "why": "Too low a reorder trigger causes stockouts on a fast-mover; excess capital is the opposite problem, and costing/credit-limit effects aren't caused by a reorder-level setting."
  },
  {
    "day": 4,
    "topic": "General Ledger & Reports",
    "q": "A client's Trial Balance is out of balance by exactly the value of one specific transaction. What is the most likely cause?",
    "options": [
      "That one transaction was posted incompletely, missing one side",
      "That one customer's forex gain or loss was left as unrealised",
      "That one stock item's costing method was recently changed over",
      "That one report template was customized without proper testing"
    ],
    "correct": 0,
    "why": "An imbalance matching one transaction's exact value points to an incomplete posting, not a forex treatment, a costing change, or a report template issue."
  },
  {
    "day": 4,
    "topic": "General Ledger & Reports",
    "q": "A company is setting up bank reconciliation for the very first time and needs to enter its initial starting balances. Which function is this?",
    "options": [
      "Opening Bank Reconciliation, entering the initial starting figures",
      "Auto Bank Reconciliation, matching statement lines automatically",
      "Foreign Bank Adjustment, adjusting for exchange rate differences",
      "Bank Reconciliation Report, printing the reconciled month's result"
    ],
    "correct": 0,
    "why": "First-time initial balances specifically belong to Opening Bank Reconciliation; the other three describe ongoing matching, forex adjustment, or reporting, not initial setup."
  },
  {
    "day": 4,
    "topic": "General Ledger & Reports",
    "q": "A client wants to see exactly how much of this year's net profit has been declared out as dividends. Which report shows this?",
    "options": [
      "The Profit and Loss Statement with Appropriation Account",
      "The standard Profit and Loss Statement for the current period",
      "The Trial Balance report summarizing every ledger account",
      "The Maintain Budget report comparing actual to planned figures"
    ],
    "correct": 0,
    "why": "Dividend appropriation of profit is shown specifically on the P&L with Appropriation Account, not the plain P&L, the Trial Balance, or a budget comparison."
  },
  {
    "day": 4,
    "topic": "General Ledger & Reports",
    "q": "A business wants to compare its actual monthly general ledger performance against a set of planned target figures. Which feature supports this?",
    "options": [
      "Maintain Budget, comparing actual figures against planned targets",
      "Auto Post GL Stock Value By Project, posting value by project code",
      "Auto Posting Stock Month End Value, posting month-end stock value",
      "OCR Scan, extracting data automatically from a scanned document"
    ],
    "correct": 0,
    "why": "Comparing actuals to planned targets is what Maintain Budget is for; the other three automate stock-to-GL postings or document scanning, not budget comparison."
  },
  {
    "day": 4,
    "topic": "General Ledger & Reports",
    "q": "A client's month-end stock valuation is not automatically flowing into their general ledger each period. Which feature should be checked?",
    "options": [
      "Auto Posting Stock Month End Value, posting valuation to the GL",
      "Auto Post GL Stock Value By Project, posting value to a project",
      "Maintain Budget, comparing that month's actual figures to target",
      "Foreign Bank Adjustment, adjusting the bank balance for forex"
    ],
    "correct": 0,
    "why": "Automatic month-end stock-to-GL posting is specifically Auto Posting Stock Month End Value; the project-based posting, budget, and forex features serve different jobs."
  },
  {
    "day": 4,
    "topic": "General Ledger & Reports",
    "q": "A client's printed invoice shows a total that doesn't match the sum of its own line items, off by exactly one cent. Which guide addresses this?",
    "options": [
      "The Rounding Report guide, covering line-total rounding mismatches",
      "The Hide Zero guide, covering suppression of zero-value report lines",
      "The SUM Variable for Tax Column guide, covering calculated tax totals",
      "The Disable Query in Report guide, covering unwanted report queries"
    ],
    "correct": 0,
    "why": "A one-cent mismatch between line items and the grand total is a rounding issue, not zero-suppression, a tax-sum variable, or a query problem."
  },
  {
    "day": 4,
    "topic": "General Ledger & Reports",
    "q": "In broad terms, what is Fast Report used for within SQL Account?",
    "options": [
      "Designing and customizing the layout of printed report templates",
      "Validating and automatically patching database integrity problems",
      "Extracting data automatically from a scanned paper document image",
      "Comparing a period's actual general ledger figures to a set budget"
    ],
    "correct": 0,
    "why": "Fast Report is the report design/template tool, unlike database validation, document scanning, or budget comparison, which are separate features entirely."
  },
  {
    "day": 4,
    "topic": "General Ledger & Reports",
    "q": "A payment is made to a foreign contractor, and the client asks whether tax must be deducted before the payment is sent. Which concept applies?",
    "options": [
      "Withholding Tax, deducted at source before the payment is remitted",
      "Sales and Service Tax, charged on locally taxable goods or services",
      "Goods and Services Tax, charged broadly across the supply chain",
      "CP58, a statement covering payments to an agent or distributor"
    ],
    "correct": 0,
    "why": "Tax deducted at source on a payment abroad is Withholding Tax specifically, not SST, GST, or the CP58 agent/distributor statement."
  },
  {
    "day": 4,
    "topic": "General Ledger & Reports",
    "q": "A client's bank reconciliation shows several outstanding cheques that have not cleared for many months. What is the recommended action?",
    "options": [
      "Follow up with the payee, or void stale cheques per company policy",
      "Post a fresh Stock Adjustment to reflect the outstanding cheque value",
      "Post an Auto Post GL Stock Value entry against the affected project",
      "Ignore them permanently, since bank reconciliation is optional here"
    ],
    "correct": 0,
    "why": "Long-outstanding cheques should be followed up or voided by policy; a stock adjustment or project posting is unrelated, and ignoring them permanently is not sound practice."
  },
  {
    "day": 4,
    "topic": "General Ledger & Reports",
    "q": "Which item would you check first if a client reports that their Trial Balance simply does not balance at all?",
    "options": [
      "Whether an unposted or incomplete transaction exists somewhere",
      "Whether the current barcode label size setting is configured right",
      "Whether the current stock item reorder level needs to be raised",
      "Whether the current customer credit limit needs to be adjusted"
    ],
    "correct": 0,
    "why": "An unbalanced Trial Balance points first to an incomplete posting; barcode size, reorder level, and credit limit have no bearing on ledger balancing."
  },
  {
    "day": 5,
    "topic": "Tools & Troubleshooting",
    "q": "An admin wants to restrict exactly which modules, screens, and actions one particular staff member can use. Which feature applies?",
    "options": [
      "Access Control, restricting modules, screens, and actions per user",
      "Maintain Acceptable Transaction Date, restricting posting dates",
      "Two-Step Verification, requiring a second proof beyond a password",
      "Analyse Data Integrity, checking the database for inconsistencies"
    ],
    "correct": 0,
    "why": "Per-user module/screen/action restriction is exactly Access Control; the others limit posting dates, add login verification, or check data health."
  },
  {
    "day": 5,
    "topic": "Tools & Troubleshooting",
    "q": "A junior staff member accidentally posts a transaction dated next year, well outside the current period. Which setting could have prevented this?",
    "options": [
      "Maintain Acceptable Transaction Date, restricting valid posting dates",
      "Access Control, restricting which screens that staff member can see",
      "Set Running No by Date/Year Format, restricting document numbering",
      "Set First Year Account, restricting the company's first year length"
    ],
    "correct": 0,
    "why": "Restricting the valid posting date range is Maintain Acceptable Transaction Date; the others govern screen access, numbering format, or the first financial year, not posting dates."
  },
  {
    "day": 5,
    "topic": "Tools & Troubleshooting",
    "q": "A client's reports show inconsistent totals across different screens, with no obvious single cause. Which tool should be run to check for this?",
    "options": [
      "Analyse Data Integrity, checking the database for inconsistencies",
      "SQL Diagnosis Utility, validating and then patching found issues",
      "Performance & Speed Improvement, addressing slow network response",
      "Maintain Acceptable Transaction Date, restricting valid posting dates"
    ],
    "correct": 0,
    "why": "Checking for underlying inconsistencies is Analyse Data Integrity's specific job; the diagnosis utility goes further into patching, and the other two options address unrelated problems."
  },
  {
    "day": 5,
    "topic": "Tools & Troubleshooting",
    "q": "A client's database appears corrupted after a sudden power outage while the system was open. Which tool should be run first, after confirming a backup exists?",
    "options": [
      "SQL Diagnosis Utility, to validate the database and patch if needed",
      "Analyse Data Integrity, to check the database for inconsistencies",
      "Global Price Change, to reset every affected stock item's pricing",
      "Centralized Deployment, to push a fresh setup file to that PC"
    ],
    "correct": 0,
    "why": "Suspected corruption calls for the diagnosis utility, which can both validate and patch; the integrity checker alone doesn't fix anything, and pricing/deployment tools are irrelevant here."
  },
  {
    "day": 5,
    "topic": "Tools & Troubleshooting",
    "q": "A construction client wants to see profitability broken down by individual job site, separately from the company's overall figures. Which module fits?",
    "options": [
      "The Project Module, tracking income and cost per job or contract",
      "The Multi Location Module, tracking stock per branch or warehouse",
      "The Maintain Budget feature, comparing actuals to planned targets",
      "The Batch Tracking feature, grouping stock items by production lot"
    ],
    "correct": 0,
    "why": "Per-job-site profitability is the Project Module's purpose; location tracking, budgeting, and batch tracking all serve different, unrelated jobs."
  },
  {
    "day": 5,
    "topic": "Tools & Troubleshooting",
    "q": "A company incorporated mid-year wants its very first financial year to legitimately run for fourteen months instead of twelve. What setting handles this?",
    "options": [
      "Set First Year Account, allowing a first year longer than 12 months",
      "Set Running No by Date/Year Format, allowing custom document numbering",
      "Maintain Acceptable Transaction Date, allowing an extended posting window",
      "Advance Currency Module, allowing more advanced multi-currency handling"
    ],
    "correct": 0,
    "why": "An extended first financial year is exactly what Set First Year Account covers; numbering format, posting-date windows, and multi-currency handling are unrelated settings."
  },
  {
    "day": 5,
    "topic": "Tools & Troubleshooting",
    "q": "A business wants its invoice numbers to reset each year, for example starting fresh as INV-2027-0001 once the new year begins. Which setting enables this?",
    "options": [
      "Set Running No by Date/Year Format, resetting numbering by year",
      "Set First Year Account, extending the company's first financial year",
      "Maintain Acceptable Transaction Date, restricting valid posting dates",
      "Advance Currency Module, enabling more advanced multi-currency use"
    ],
    "correct": 0,
    "why": "Yearly-resetting document numbers is the Running No by Date/Year Format setting; the other three touch the financial year length, posting-date limits, or currency handling instead."
  },
  {
    "day": 5,
    "topic": "Tools & Troubleshooting",
    "q": "Multiple users on a shared network report that SQL Account has become extremely slow to load and save records. Where should this be investigated first?",
    "options": [
      "Server and domain controller performance, plus network configuration",
      "Each affected user's individual Access Control permission settings",
      "Each affected stock item's current reorder level and reorder quantity",
      "Each affected customer's currently configured credit limit setting"
    ],
    "correct": 0,
    "why": "Shared slowness across a network points to server/domain-controller and network performance, not individual permissions, reorder levels, or customer credit limits."
  },
  {
    "day": 5,
    "topic": "Tools & Troubleshooting",
    "q": "Which sequence best reflects sound first-line troubleshooting when a client reports a serious database error?",
    "options": [
      "Confirm a backup exists, validate the database, escalate if unresolved",
      "Delete the affected company file, then quickly recreate it from scratch",
      "Restore an old backup immediately, skipping any validation step first",
      "Escalate immediately, without confirming a backup exists at all yet"
    ],
    "correct": 0,
    "why": "The safe order is confirm backup, then validate, then escalate only if still unresolved; deleting the file, skipping validation, or escalating blind all skip a necessary safety step."
  },
  {
    "day": 5,
    "topic": "Tools & Troubleshooting",
    "q": "Why does the onboarding path deliberately keep the theory quiz and the hands-on practical as two separate, independent tests?",
    "options": [
      "To assess knowledge and hands-on ability independently of each other",
      "To make the overall combined evaluation noticeably shorter to run",
      "To let a candidate skip whichever of the two tests they prefer to",
      "To reduce the total number of questions the candidate must answer"
    ],
    "correct": 0,
    "why": "Separating the two tests exists so gaps in knowledge versus execution show up independently; it isn't done to shorten the process, allow skipping, or cut question count."
  }
];
