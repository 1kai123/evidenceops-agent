# Brand Portals Access Recovery

This file records the exact steps needed to recover access to Brand Portals for Brands and finish the submission.

## Current External State

- `https://brand.devpost.com/` returns HTTP 403.
- `https://brand.devpost.com/register?...` also returns HTTP 403.
- Devpost settings page is accessible.
- BrandKity signup page is accessible.

## Information Required From User

Devpost eligibility fields require personal student information. Do not invent these values.

Needed:

1. School English name.
2. Current student level: `College`, `High School`, or `Middle School`.
3. Graduation month and year.
4. Birth month and year.

## Devpost Eligibility Update Steps

1. Open: https://devpost.com/settings/preferences_and_eligibility#eligibility-section
2. Set `Occupation` to `Student`.
3. Set `Current student level`.
4. Fill `School name`.
5. Fill `Graduation month/year`.
6. Fill `Birth month/year`.
7. Save changes.
8. Retry: https://brand.devpost.com/

## BrandKity Account Steps

1. Open: https://brandkity.com/signup
2. Sign up with Google or email/password.
3. Complete Cloudflare Turnstile manually.
4. Create a free BrandKit named `EvidenceOps Agent`.
5. Use `BRANDKITY_TRANSFER_GUIDE.md` to populate sections.
6. Upload the zip package:
   https://1kai123.github.io/evidenceops-agent/brand-portal/assets/evidenceops-brand-assets.zip
7. Publish the BrandKit and copy its public BrandKity URL.

## Devpost Support Email Template

Subject: Access issue for Brand Portals for Brands student hackathon

Hello Devpost team,

I am a student in China and I am trying to access Brand Portals for Brands, but `https://brand.devpost.com/` returns HTTP 403 for my account. The hackathon eligibility summary says students only, above legal age of majority, and all countries/territories excluding standard exceptions.

My project is ready:

- Brand portal backup URL: https://1kai123.github.io/evidenceops-agent/brand-portal/
- Repository: https://github.com/1kai123/evidenceops-agent
- Asset package: https://1kai123.github.io/evidenceops-agent/brand-portal/assets/evidenceops-brand-assets.zip

Could you please confirm whether my account is eligible and help restore access to the hackathon submission page?

Thank you.
