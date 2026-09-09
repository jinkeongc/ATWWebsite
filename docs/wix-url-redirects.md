# Wix URL migration inventory

Checked against the live Wix navigation and search index on 9 September 2026.

| Existing Wix URL | New URL | Action |
| --- | --- | --- |
| `/` | `/` | Preserve |
| `/products` | `/products` | Preserve |
| `/services` | `/services` | Preserve |
| `/why-us` | `/about` | Permanent redirect (308) |
| `/about` | `/about` | Preserve |
| `/contact` | `/contact` | Preserve |

The `/capabilities` page is new and requires no legacy redirect.

Before the DNS cutover, compare this inventory with Wix Analytics and Google Search Console to catch any old campaign or unlinked URLs that are not present in the navigation or current search index.
