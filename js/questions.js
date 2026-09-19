// Auto-generated from the SQL Account Support Notion knowledge base.
// 100 hard MCQ questions, 20 per onboarding day, equal-length confusable choices.
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
  },
  {
    "day": 1,
    "topic": "Orientation & Setup",
    "q": "A client swaps their receipt printer from a Panasonic model to an Epson model, and receipts now print garbled or not at all. What should be checked first?",
    "options": [
      "The Windows printer driver installed and selected for that Epson model",
      "The stock item's barcode label size configured for that print job",
      "The company's chosen financial year start date on the setup screen",
      "The customer's assigned price list linked to that sales document"
    ],
    "correct": 0,
    "why": "A hardware swap needs the matching Epson driver installed and selected; label size, financial year, and price list settings have nothing to do with which printer driver is active."
  },
  {
    "day": 1,
    "topic": "Orientation & Setup",
    "q": "A client currently using MYOB wants their existing customer and stock records carried over into SQL Account. Which guide should you point them to?",
    "options": [
      "The MYOB Migration Guide, covering data brought over from MYOB",
      "The Import UBS Guide, covering data brought over from UBS",
      "The Clone Master Data Guide, covering data copied within SQL",
      "The Centralized Deployment Guide, covering setup files pushed to PCs"
    ],
    "correct": 0,
    "why": "Only the MYOB-specific migration guide matches a client actually coming from MYOB; the UBS guide, clone-master-data feature, and deployment tool all handle different source systems or jobs."
  },
  {
    "day": 1,
    "topic": "Orientation & Setup",
    "q": "A Malaysian client needs Sales and Service Tax correctly applied to their invoices going forward. Which setup step is required?",
    "options": [
      "Configuring the SST tax codes and rates in the company's tax setup",
      "Configuring the customer's assigned credit limit in their profile",
      "Configuring the stock item's reorder level for that tax category",
      "Configuring the printer driver used for that customer's invoices"
    ],
    "correct": 0,
    "why": "Correct SST charging needs tax codes and rates configured in tax setup; credit limits, reorder levels, and printer drivers don't affect what tax is charged."
  },
  {
    "day": 1,
    "topic": "Orientation & Setup",
    "q": "A company opening a second branch wants the new company book to start with the same customer and stock records as the existing one, without re-typing them. Which feature applies?",
    "options": [
      "Clone Master Data, copying existing records into the new company book",
      "Centralized Deployment, pushing one setup file onto many new PCs",
      "Multi Location Module, tracking stock quantity per warehouse",
      "Open Bank Deposit, tracking receipts not yet lodged to the bank"
    ],
    "correct": 0,
    "why": "Copying existing customer/stock records into a new company book is exactly what Clone Master Data does; deployment pushes installers, Multi Location tracks stock by site, and open bank deposit is unrelated to master data."
  },
  {
    "day": 1,
    "topic": "Orientation & Setup",
    "q": "A client evaluating SQL Account in demo mode finds that saving beyond a certain number of transactions is blocked. What does this indicate?",
    "options": [
      "The software is running under trial limitations pending license activation",
      "The company's financial year start date has not yet been registered",
      "The user's access control rights have been set too narrowly by an admin",
      "The database has failed its integrity check and now refuses new records"
    ],
    "correct": 0,
    "why": "Transaction caps are a hallmark of unlicensed trial/demo mode; the financial year date, access rights, and integrity checks don't impose transaction-count limits."
  },
  {
    "day": 1,
    "topic": "Orientation & Setup",
    "q": "A support agent is about to troubleshoot a missing feature a client expects to see. What should be confirmed first?",
    "options": [
      "Which SQL Account edition and modules the client's license includes",
      "Which stock costing method the client currently has configured",
      "Which financial year start date the client originally registered",
      "Which printer driver the client currently has installed and active"
    ],
    "correct": 0,
    "why": "A 'missing' feature is often simply not included in that client's edition/module set, so this should be confirmed before troubleshooting; costing method, financial year, and printer driver don't explain an absent feature."
  },
  {
    "day": 1,
    "topic": "Orientation & Setup",
    "q": "A client wants to run a database repair tool to fix reported inconsistencies. What must be done immediately before running it?",
    "options": [
      "Take a full backup of the live company database first",
      "Take a full stock take across every branch and location first",
      "Take a full review of every customer's assigned credit limit first",
      "Take a full export of every printed Fast Report template first"
    ],
    "correct": 0,
    "why": "Any repair tool that writes to the database needs a fresh backup first in case the repair goes wrong; stock takes, credit limit reviews, and report exports don't protect against data loss."
  },
  {
    "day": 1,
    "topic": "Orientation & Setup",
    "q": "When registering a new company book, which detail determines the currency all local transactions are recorded and reported in by default?",
    "options": [
      "The company's chosen base/home currency, set during registration",
      "The company's registered postal address on file",
      "The company's assigned user access control list",
      "The company's activated software license key"
    ],
    "correct": 0,
    "why": "Base currency, set at registration, drives how local transactions are recorded and reported; address, access rights, and license key have no bearing on the reporting currency."
  },
  {
    "day": 1,
    "topic": "Orientation & Setup",
    "q": "A client reinstalls SQL Account on a replacement PC after their old one failed. What is needed to restore full licensed functionality?",
    "options": [
      "Reactivating the existing license key on the new installation",
      "Re-registering a brand-new company book with a new financial year",
      "Re-running the Enlarging UI Screen option for the new display",
      "Re-cloning master data from a company book that no longer exists"
    ],
    "correct": 0,
    "why": "A reinstall needs the existing license reactivated on the new machine; registering a new company, adjusting display scaling, or cloning from a lost file won't restore licensed functionality."
  },
  {
    "day": 1,
    "topic": "Orientation & Setup",
    "q": "A client wants to change their registered financial year start date partway through an active accounting year. What should they be warned about first?",
    "options": [
      "It can distort reporting periods and should be planned with an accountant",
      "It will automatically void every invoice issued so far in that year",
      "It will permanently lock the company book from any further postings",
      "It will reset every customer's outstanding balance back to zero"
    ],
    "correct": 0,
    "why": "Changing the financial year mid-stream affects how periods report and needs careful planning with an accountant; it doesn't void invoices, lock the book, or reset customer balances."
  },
  {
    "day": 2,
    "topic": "Sales & Customer",
    "q": "What is the fundamental purpose of recording a customer's payment against a specific invoice?",
    "options": [
      "To reduce and eventually clear that invoice's outstanding balance",
      "To increase the customer's assigned credit limit going forward",
      "To automatically apply a discount to the customer's next invoice",
      "To convert the invoice into a formal sales quotation for reference"
    ],
    "correct": 0,
    "why": "A payment's job is to reduce and eventually clear the linked invoice's balance; it doesn't raise credit limits, apply future discounts, or turn an invoice into a quotation."
  },
  {
    "day": 2,
    "topic": "Sales & Customer",
    "q": "How does recording a payment from a foreign-currency customer differ from recording one from a local customer?",
    "options": [
      "It must capture the exchange rate applied at the time of payment",
      "It must skip linking the payment to any specific invoice at all",
      "It must automatically convert the customer into a supplier record",
      "It must be entered only through the Online Mobile Approval screen"
    ],
    "correct": 0,
    "why": "A foreign-currency payment needs an exchange rate captured, unlike a local one; it still links to an invoice, doesn't convert the customer into a supplier, and isn't restricted to mobile approval."
  },
  {
    "day": 2,
    "topic": "Sales & Customer",
    "q": "A customer hands over a cheque dated three weeks in the future as part of payment. How should this be recorded?",
    "options": [
      "As a Post-Dated Cheque, not cleared or banked until its stated date",
      "As an ordinary payment, cleared and banked on the day it's received",
      "As a customer contra, offsetting it against a supplier balance instead",
      "As an overpayment, refunded back to the customer the same day"
    ],
    "correct": 0,
    "why": "A future-dated cheque is specifically a PDC and isn't banked until that date; treating it as an ordinary cleared payment, a contra, or an overpayment misrepresents it."
  },
  {
    "day": 2,
    "topic": "Sales & Customer",
    "q": "A cashier records a customer payment but the customer has no outstanding invoices at that moment. What should happen to that payment?",
    "options": [
      "It should be flagged as an unapplied advance for future invoices",
      "It should be silently discarded since there is nothing to apply it to",
      "It should be automatically converted into a permanent price discount",
      "It should be recorded as a bounced payment pending bank confirmation"
    ],
    "correct": 0,
    "why": "A payment with no invoice to apply against should sit as an unapplied advance/credit, not be discarded, turned into a discount, or misrecorded as bounced."
  },
  {
    "day": 2,
    "topic": "Sales & Customer",
    "q": "Does the method a customer pays with (cash, cheque, or bank transfer) affect how that payment should be recorded in SQL Account?",
    "options": [
      "Yes, it determines which cash/bank account and clearing status apply",
      "No, every payment method posts to the exact same account identically",
      "Yes, it determines which customer's credit limit is permanently raised",
      "No, payment method only matters for supplier transactions, not customers"
    ],
    "correct": 0,
    "why": "Payment method determines the account it hits and whether it's immediately cleared or pending (like a PDC); it doesn't uniformly post the same way, raise credit limits, or apply only to suppliers."
  },
  {
    "day": 2,
    "topic": "Sales & Customer",
    "q": "A customer pays an amount that only covers part of two separate outstanding invoices. What is the correct handling?",
    "options": [
      "Allocate the payment across the invoices as the customer specifies or by age",
      "Apply the entire payment only to the single oldest invoice, ignoring the rest",
      "Reject the payment until the customer pays the full amount of both invoices",
      "Record it as an overpayment even though both invoices remain unpaid"
    ],
    "correct": 0,
    "why": "A partial payment should be allocated across the relevant invoices as directed or by standard aging practice; forcing it onto one invoice, rejecting it, or mislabeling it as overpayment are all incorrect."
  },
  {
    "day": 2,
    "topic": "Sales & Customer",
    "q": "A credit controller wants to see which customer balances are overdue, grouped by how many days they've been outstanding. Which report fits?",
    "options": [
      "The Debtor Aging Analysis report, grouped by outstanding balance age",
      "The Customer Payment Listing Commission report, grouped by collection",
      "The Sales by Salesman Listing report, grouped by invoice issue date",
      "The Sales Commission Forecast report, grouped by quoted order value"
    ],
    "correct": 0,
    "why": "Grouping outstanding balances by how overdue they are is exactly Debtor Aging Analysis; the other reports track commission, salesman sales, or forecasts, not overdue aging."
  },
  {
    "day": 2,
    "topic": "Sales & Customer",
    "q": "A customer requests a document listing every invoice, payment, and their running balance over the past few months. Which document serves this?",
    "options": [
      "The Customer Statement of Account, listing transactions and running balance",
      "The Sales Quotation, listing proposed items and prices before an order",
      "The Delivery Order, listing items dispatched for a specific shipment",
      "The Credit Note, listing an adjustment against one particular invoice"
    ],
    "correct": 0,
    "why": "A running history of invoices, payments, and balance is a Statement of Account; a quotation, delivery order, and credit note each cover a single, narrower transaction type."
  },
  {
    "day": 2,
    "topic": "Sales & Customer",
    "q": "A customer with a set credit limit tries to place a new order that would push their balance over that limit. What is the expected system behavior?",
    "options": [
      "The system flags or blocks the order pending approval or limit review",
      "The system automatically raises the credit limit to accommodate the order",
      "The system silently processes the order without recording it anywhere",
      "The system converts the excess amount into an automatic bank transfer"
    ],
    "correct": 0,
    "why": "Exceeding a set credit limit should flag or block the order for review; the system doesn't auto-raise the limit, silently skip recording it, or trigger an automatic transfer."
  },
  {
    "day": 2,
    "topic": "Sales & Customer",
    "q": "A salesperson wants to turn an accepted Sales Quotation directly into a Sales Order without retyping all the line items. What does SQL Account support?",
    "options": [
      "Converting the quotation forward, carrying its items into the new document",
      "Only manually retyping every line item into a brand-new sales order",
      "Only converting a quotation into a credit note, never into an order",
      "Only converting a quotation after the customer's credit limit is removed"
    ],
    "correct": 0,
    "why": "SQL Account lets an accepted quotation convert forward into a sales order/invoice, carrying its lines along; manual retyping, converting to a credit note, or requiring credit-limit removal are not how it works."
  },
  {
    "day": 3,
    "topic": "Stock & Inventory",
    "q": "What does performing a Stock Take fundamentally involve?",
    "options": [
      "Physically counting stock on hand and comparing it to system records",
      "Physically relabeling every stock item with a new barcode design",
      "Physically moving stock from one warehouse location to another",
      "Physically reviewing every stock item's costing method in use"
    ],
    "correct": 0,
    "why": "A stock take is a physical count checked against system records; relabeling, moving stock, or reviewing costing method are separate activities entirely."
  },
  {
    "day": 3,
    "topic": "Stock & Inventory",
    "q": "A retailer wants to print a label showing the item name and selling price to stick on the shelf, separate from the barcode used for scanning. Which feature is this?",
    "options": [
      "Stock Price Tag, printing a price label to attach to the physical item",
      "Barcode Module, generating a scannable code that encodes item identity",
      "Serial No Module, tracking each individual unit of that item separately",
      "Global Price Change, updating that item's price across the whole system"
    ],
    "correct": 0,
    "why": "A printed price label for display is the Stock Price Tag; the barcode encodes identity for scanning, serial tracking is per-unit, and Global Price Change only updates the price value itself."
  },
  {
    "day": 3,
    "topic": "Stock & Inventory",
    "q": "A client wants to switch their stock costing method from weighted average to FIFO partway through the year, after many transactions have posted. What is the recommended approach?",
    "options": [
      "Discuss it with an accountant or auditor first, given the complexity involved",
      "Switch it immediately, since the change only affects future purchases",
      "Switch it immediately, since past transactions are automatically recalculated",
      "Avoid it entirely, since SQL Account cannot support more than one method ever"
    ],
    "correct": 0,
    "why": "Changing costing method mid-year affects COGS and profit in complex ways, so it should involve an accountant first; treating it as trivial or impossible are both wrong."
  },
  {
    "day": 3,
    "topic": "Stock & Inventory",
    "q": "Before running a Global Price Change that will affect thousands of stock items, what is the recommended practice?",
    "options": [
      "Test it on a demo company first, and back up before applying it live",
      "Apply it directly to the live company, since it can be undone with one click",
      "Delete all affected stock items first, then recreate them at new prices",
      "Disable Access Control for all users so the change applies system-wide faster"
    ],
    "correct": 0,
    "why": "Testing in a demo company and backing up beforehand protects against a bulk-pricing mistake; applying it blind, deleting items, or disabling access control are all unsafe shortcuts."
  },
  {
    "day": 3,
    "topic": "Stock & Inventory",
    "q": "An electronics distributor sells individually warranted laptops but also sells boxed cables that only need tracking by delivery lot. Which pairing is correct?",
    "options": [
      "Serial No tracking for the laptops, Batch tracking for the cables",
      "Batch tracking for the laptops, Serial No tracking for the cables",
      "Serial No tracking for both the laptops and the cables equally",
      "Multi Location tracking for both the laptops and the cables equally"
    ],
    "correct": 0,
    "why": "Individually warranted units need serial tracking while lot-based goods need batch tracking, not the reverse, not serial for both, and not location tracking, which is about branches, not units or lots."
  },
  {
    "day": 3,
    "topic": "Stock & Inventory",
    "q": "A stock take finds more physical units on hand than the system currently records for an item. What is the correct next step?",
    "options": [
      "Post a Stock Adjustment increasing the system quantity to match the count",
      "Post a Global Price Change increasing the item's listed selling price",
      "Post a Reorder Level change increasing the item's reorder threshold",
      "Ignore the difference, since excess stock never needs to be recorded"
    ],
    "correct": 0,
    "why": "Reconciling a higher physical count to the system is still a Stock Adjustment, this time increasing quantity; price, reorder level, and ignoring the count are all wrong responses."
  },
  {
    "day": 3,
    "topic": "Stock & Inventory",
    "q": "What is the distinction between an item's Reorder Level and its Reorder Quantity?",
    "options": [
      "Reorder Level is the threshold that triggers reordering; Reorder Quantity is how much to order",
      "Reorder Level is how much to order; Reorder Quantity is the threshold that triggers reordering",
      "Reorder Level applies only to serial items; Reorder Quantity applies only to batch items",
      "Reorder Level and Reorder Quantity are two names for the exact same setting"
    ],
    "correct": 0,
    "why": "Reorder Level is the trigger threshold and Reorder Quantity is the amount to order once triggered, not the reverse, not split by serial/batch, and not identical settings."
  },
  {
    "day": 3,
    "topic": "Stock & Inventory",
    "q": "A business with the Multi Location Module wants to move a batch of stock from its main warehouse to a branch outlet, updating both locations' figures. Which document records this?",
    "options": [
      "A Stock Transfer document, moving quantity and value between locations",
      "A Stock Adjustment document, correcting one location's counted quantity",
      "A Sales Invoice document, billing the branch outlet for the stock moved",
      "A Purchase Order document, ordering new stock from an outside supplier"
    ],
    "correct": 0,
    "why": "Moving stock between the business's own locations is a Stock Transfer; adjustment corrects a count, an invoice bills an external party, and a purchase order brings in new stock from a supplier."
  },
  {
    "day": 3,
    "topic": "Stock & Inventory",
    "q": "A finance manager wants to know the total value of all stock currently on hand, across every item, as of today. Which report answers this?",
    "options": [
      "The Stock Valuation Report, totaling on-hand quantity times cost value",
      "The Debtor Aging Analysis report, totaling overdue customer balances",
      "The Sales Commission Forecast report, totaling projected commission owed",
      "The Trial Balance report, totaling every ledger account's current balance"
    ],
    "correct": 0,
    "why": "Total on-hand stock value is exactly what a Stock Valuation Report shows; the aging, commission, and trial balance reports cover customer debts, forecasted commission, and ledger balances instead."
  },
  {
    "day": 3,
    "topic": "Stock & Inventory",
    "q": "A supermarket wants to raise prices on one category by a fixed RM0.50 per item, rather than by a percentage. Does Global Price Change support this?",
    "options": [
      "Yes, it supports both a percentage increase and a fixed amount increase",
      "No, it only supports percentage-based changes, never a fixed amount",
      "No, it only supports fixed-amount changes, never a percentage",
      "Yes, but only when applied to serial-tracked items specifically"
    ],
    "correct": 0,
    "why": "Global Price Change supports both percentage and fixed-amount adjustments, so it isn't limited to one or the other, and it isn't restricted to serial-tracked items."
  },
  {
    "day": 4,
    "topic": "General Ledger & Reports",
    "q": "A client wants the system to automatically match lines from an imported bank statement against their own book entries, instead of matching manually. Which feature applies?",
    "options": [
      "Auto Bank Reconciliation, automatically matching statement lines to entries",
      "Opening Bank Reconciliation, entering initial starting balances the first time",
      "Foreign Bank Adjustment, adjusting a balance for exchange rate movement",
      "Maintain Budget, comparing actual figures against planned target figures"
    ],
    "correct": 0,
    "why": "Automatic matching of statement lines to book entries is Auto Bank Reconciliation; the other three handle initial setup, forex adjustment, or budget comparison instead."
  },
  {
    "day": 4,
    "topic": "General Ledger & Reports",
    "q": "A company's foreign-currency bank account balance in the books no longer matches its converted value due to exchange rate movement. Which feature corrects this?",
    "options": [
      "Foreign Bank Adjustment, adjusting the book balance for the rate movement",
      "Auto Bank Reconciliation, matching statement lines against book entries",
      "Withholding Tax, deducting tax at source before a payment is remitted",
      "Accumulated Depreciation, reducing an asset's book value over time"
    ],
    "correct": 0,
    "why": "A forex-driven book balance mismatch is fixed by Foreign Bank Adjustment; reconciliation just matches transactions, withholding tax concerns payments abroad, and depreciation concerns fixed assets."
  },
  {
    "day": 4,
    "topic": "General Ledger & Reports",
    "q": "A client asks what the Profit and Loss Statement actually shows, as opposed to the Balance Sheet. What is the correct distinction?",
    "options": [
      "P&L shows revenue minus expenses over a period; Balance Sheet shows a point-in-time position",
      "P&L shows a point-in-time position; Balance Sheet shows revenue minus expenses over a period",
      "P&L and Balance Sheet both show the exact same figures in different formats",
      "P&L only applies to companies with more than one branch location"
    ],
    "correct": 0,
    "why": "P&L covers income and expense over a period while the Balance Sheet is a snapshot at a point in time, not the reverse, not identical reports, and not limited to multi-branch companies."
  },
  {
    "day": 4,
    "topic": "General Ledger & Reports",
    "q": "A company wants to review its profit and loss trend across eighteen months in one single report, rather than one financial year at a time. Which feature supports this?",
    "options": [
      "P&L Statement for More Than 12 Months, spanning a longer custom period",
      "P&L Statement with Appropriation Account, showing dividend allocation",
      "Opening Bank Reconciliation, entering the company's initial balances",
      "Set First Year Account, extending the company's first financial year"
    ],
    "correct": 0,
    "why": "Reporting P&L across more than one financial year in one view is what the More Than 12 Months option is for; appropriation, opening reconciliation, and first-year setup all address different needs."
  },
  {
    "day": 4,
    "topic": "General Ledger & Reports",
    "q": "A client asks what Accumulated Depreciation represents on their fixed asset schedule. What is the correct explanation?",
    "options": [
      "The total depreciation expensed against an asset since it was acquired",
      "The original purchase price the asset was bought for, before any use",
      "The projected resale value expected if the asset were sold today",
      "The insurance premium currently being paid to cover that asset"
    ],
    "correct": 0,
    "why": "Accumulated depreciation is the running total of depreciation expensed since acquisition, reducing book value; it isn't the purchase price, a resale estimate, or an insurance cost."
  },
  {
    "day": 4,
    "topic": "General Ledger & Reports",
    "q": "A business wants to reduce manual typing when entering supplier invoices by having the system read data straight off a scanned document. Which feature applies?",
    "options": [
      "OCR Scan, extracting data automatically from a scanned document image",
      "Fast Report, designing and customizing a printed report's layout",
      "Maintain Budget, comparing actual figures against planned targets",
      "Auto Bank Reconciliation, matching statement lines against book entries"
    ],
    "correct": 0,
    "why": "Reading data off a scanned document to cut manual entry is exactly what OCR Scan does; Fast Report edits templates, Maintain Budget compares figures, and reconciliation matches bank lines."
  },
  {
    "day": 4,
    "topic": "General Ledger & Reports",
    "q": "A construction company wants stock value postings to the general ledger split out by which project consumed the stock. Which feature enables this?",
    "options": [
      "Auto Post GL Stock Value By Project, linking postings to a project code",
      "Auto Posting Stock Month End Value, posting overall month-end valuation",
      "Maintain Budget, comparing that month's actual figures to planned targets",
      "Multi Location Module, tracking stock quantity and value per warehouse"
    ],
    "correct": 0,
    "why": "Splitting stock value GL postings by project is specifically Auto Post GL Stock Value By Project; the month-end posting feature is company-wide, budget compares actuals to plan, and Multi Location splits by warehouse, not project."
  },
  {
    "day": 4,
    "topic": "General Ledger & Reports",
    "q": "A client's old invoice template still prints '6%' next to the tax amount even though the tax rate has since changed to zero. What should be done?",
    "options": [
      "Edit the tax rate text in Fast Report to reflect the current rate",
      "Edit the customer's credit limit so the invoice recalculates correctly",
      "Edit the item's reorder level so the printed template refreshes",
      "Edit the company's financial year start date so the template updates"
    ],
    "correct": 0,
    "why": "An outdated printed rate on a template is fixed by editing that text in Fast Report; credit limit, reorder level, and financial year settings have no effect on printed template text."
  },
  {
    "day": 4,
    "topic": "General Ledger & Reports",
    "q": "A client wants their Ledger Report to start a new printed page each time the account group changes, rather than running continuously. Which setting controls this?",
    "options": [
      "The report's 'start new page for new group' page-break setting",
      "The report's currency display setting for foreign-currency accounts",
      "The report's rounding setting for one-cent line item mismatches",
      "The report's sort order setting for listing accounts alphabetically"
    ],
    "correct": 0,
    "why": "Page breaks between groups are controlled by the start-new-page-for-new-group setting; currency display, rounding, and sort order don't control where pages break."
  },
  {
    "day": 4,
    "topic": "General Ledger & Reports",
    "q": "Which report would a bank ask to see in order to judge what a company owns and owes at a specific date, rather than its performance over time?",
    "options": [
      "The Balance Sheet, showing assets, liabilities, and equity at that date",
      "The Profit and Loss Statement, showing revenue and expenses over a period",
      "The Maintain Budget report, showing planned figures against actual ones",
      "The Debtor Aging Analysis, showing overdue customer balances by age"
    ],
    "correct": 0,
    "why": "A snapshot of what's owned and owed at a date is the Balance Sheet; the P&L covers a period's performance, budget compares plan to actual, and aging analysis covers overdue debts only."
  },
  {
    "day": 5,
    "topic": "Tools & Troubleshooting",
    "q": "A firm wants login security that requires more than just a correct password before granting access. Which feature adds this extra layer?",
    "options": [
      "Two-Step Verification, requiring a second proof beyond the password",
      "Access Control, restricting which modules and screens a user can see",
      "Maintain Acceptable Transaction Date, restricting valid posting dates",
      "Analyse Data Integrity, checking the database for inconsistencies"
    ],
    "correct": 0,
    "why": "An extra proof step beyond the password is exactly Two-Step Verification; access control limits what's visible, date restriction limits posting dates, and integrity analysis checks data health."
  },
  {
    "day": 5,
    "topic": "Tools & Troubleshooting",
    "q": "A user calls in claiming they forgot their password and asking for an immediate reset. What should happen before the reset is processed?",
    "options": [
      "Their identity should be verified first, to prevent impersonation",
      "Their access control rights should be permanently downgraded first",
      "Their company's financial year should be re-registered first",
      "Their entire company database should be restored from backup first"
    ],
    "correct": 0,
    "why": "Verifying identity first prevents an impersonator from hijacking the account; downgrading access, re-registering the year, or restoring the database are unrelated and disproportionate responses."
  },
  {
    "day": 5,
    "topic": "Tools & Troubleshooting",
    "q": "A client notices small one-cent differences appearing repeatedly on customer transaction totals due to rounding. Which feature addresses this directly?",
    "options": [
      "Customer One Cent Rounding, handling small rounding differences",
      "Advance Currency Module, enabling more advanced multi-currency handling",
      "Maintain Acceptable Transaction Date, restricting valid posting dates",
      "Set Running No by Date/Year Format, resetting document numbering by year"
    ],
    "correct": 0,
    "why": "One-cent rounding differences on customer transactions are specifically handled by Customer One Cent Rounding; the other three settings concern currency handling, posting dates, or numbering, not rounding."
  },
  {
    "day": 5,
    "topic": "Tools & Troubleshooting",
    "q": "A company dealing in several foreign currencies with complex conversion needs finds the basic forex handling insufficient. What should be considered?",
    "options": [
      "The Advance Currency Module, for more advanced multi-currency handling",
      "The Customer One Cent Rounding feature, for small rounding differences",
      "The Set First Year Account feature, for an extended first financial year",
      "The Maintain Budget feature, for comparing actuals to planned figures"
    ],
    "correct": 0,
    "why": "More advanced multi-currency needs point to the Advance Currency Module; rounding, first-year setup, and budgeting don't address currency handling depth at all."
  },
  {
    "day": 5,
    "topic": "Tools & Troubleshooting",
    "q": "A client reports a 'Database Shutdown Error' when trying to open their company file. What should be checked first?",
    "options": [
      "Whether the database service or server is running and reachable",
      "Whether the company's financial year start date is correctly set",
      "Whether the customer's credit limit has been exceeded recently",
      "Whether the item's stock costing method was recently changed"
    ],
    "correct": 0,
    "why": "A shutdown error typically traces to the database service/server not running or unreachable, which should be checked first; financial year, credit limit, and costing method are unrelated to this error."
  },
  {
    "day": 5,
    "topic": "Tools & Troubleshooting",
    "q": "What is the key difference between Analyse Data Integrity and the SQL Diagnosis Utility?",
    "options": [
      "Analyse Data Integrity only checks for issues; the Diagnosis Utility can also patch them",
      "Analyse Data Integrity only patches issues; the Diagnosis Utility can only check for them",
      "Both tools only check for issues and neither one can patch anything at all",
      "Both tools only patch issues and neither one can check anything at all"
    ],
    "correct": 0,
    "why": "Analyse Data Integrity is check-only, while the Diagnosis Utility can validate and then patch found issues, not the reverse, and neither tool is limited to only checking or only patching as stated in the other options."
  },
  {
    "day": 5,
    "topic": "Tools & Troubleshooting",
    "q": "A support agent wants to test a risky fix for a reported bug without touching the client's real data. What is the recommended approach?",
    "options": [
      "Reproduce the issue in a demo or test environment first",
      "Apply the fix directly on the client's live company file immediately",
      "Ask the client to stop using the software until the fix is ready",
      "Skip testing entirely, since most fixes work correctly the first time"
    ],
    "correct": 0,
    "why": "Reproducing and testing in a demo/test environment protects live data; applying an untested fix live, halting the client's operations, or skipping testing are all riskier shortcuts."
  },
  {
    "day": 5,
    "topic": "Tools & Troubleshooting",
    "q": "A client reports vaguely that 'the reports look wrong' with no further detail. What is the recommended first response?",
    "options": [
      "Ask clarifying questions to pin down exactly which report and what's wrong",
      "Immediately run the SQL Diagnosis Utility's patch function on their database",
      "Immediately restore last month's backup over their current live data",
      "Immediately reinstall the software from scratch on the client's machine"
    ],
    "correct": 0,
    "why": "A vague complaint needs clarifying questions before acting; jumping straight to patching, restoring a backup, or reinstalling risks fixing the wrong thing or losing data."
  },
  {
    "day": 5,
    "topic": "Tools & Troubleshooting",
    "q": "Why does good support practice call for logging every step taken while troubleshooting a client's issue?",
    "options": [
      "It creates a record that helps track what was tried and supports escalation",
      "It is required before the software will allow any transaction to be posted",
      "It automatically fixes the underlying issue once enough steps are logged",
      "It replaces the need to ever take a backup before a risky change"
    ],
    "correct": 0,
    "why": "Logging steps creates a traceable record useful for escalation and follow-up; it has no effect on transaction posting, doesn't fix anything by itself, and doesn't substitute for taking a backup."
  },
  {
    "day": 5,
    "topic": "Tools & Troubleshooting",
    "q": "A client's live production database needs the SQL Diagnosis Utility's patch/repair function run on it. What must already be in place beforehand?",
    "options": [
      "A full, verified backup taken before the patch/repair is applied",
      "A fully completed stock take across every branch and location",
      "A fully updated price list applied across every stock item first",
      "A fully re-registered financial year start date for the company"
    ],
    "correct": 0,
    "why": "Running a patch/repair tool directly modifies live data, so a verified backup must exist first in case something goes wrong; a stock take, price list update, or financial year re-registration offer no such protection."
  }
];
