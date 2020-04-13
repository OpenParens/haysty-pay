# Haysty Pay

Slack channel: https://join.slack.com/t/openparens/shared_invite/zt-dfwpzw3a-DZn8aeAto57otJpMRY6PNg

Due to concerns around the coronavirus pandemic the format of our local farmers market has changed. Previously vendors were set up at tables so that customers could freely walk around from vendor to vendor. Now, the vendors are lined up in a parking lot and the customers drive through visiting each vendor one at a time. This works really well for keeping a safe distance between people but slows down the overall process quite a bit.

The goal of this project will be to provide an application that simplifies in person payments to reduce congestion.

## Overview

Each vendor will add the total for a customer to an invoice for that customer. Payment will be taken at the end by a market representative, not an individual vendor. This will reduce the amount of time a customer needs to spend at each vendor. During busy times, more stations could be set up to take multiple payments at the same time. The rate of customers through the vendors will be determined by the slowest vendor at any give point. By allowing multiple customers to pay at the end, each vendor's process is simplified and should allow for faster throughput.

## Technical overview:

Vendors will have a login allowing them to create invoices and add/edit totals for their own business to a customer's existing invoice.
  - Certain vendors are approved to accept special payments (Senior Nutrition Vouchers, WIC, etc.) These vendors will need a way to mark their sale as using one of these methods as they do not allow change to be made on them.

Market representatives will have a login allowing them to select a customer's existing invoice, review the vendor's and vendor totals with the customer and accept payment for the total amount.

Payments will be taken outside of the app as cash, credit card, vouchers, payment app(e.g., Venmo) and noted on the invoice as paid and by what means.

Vendors will need to have a portal to review their own totals per market day.

Market representatives will need to have a portal to review totals per vendor so that payments can be distributed to each vendor.

Customer invoices will be tracked as not paid, customer paid, vendor reimburshed.
