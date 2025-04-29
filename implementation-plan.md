# Art Appraiser Landing Page Implementation Plan

## Overview

This document outlines the implementation strategy for the improvements detailed in `improvements.md`. The goal is to transform our landing page to focus more heavily on "connecting with expert appraisers" rather than just the appraisal service itself, as our users are primarily searching for appraisers, not appraisals.

## Implementation Phases

We'll implement these changes in 4 phases over 4-6 weeks:

1. **Quick Wins** (Week 1)
2. **Content & Messaging Overhaul** (Weeks 1-2)
3. **UI & Component Updates** (Weeks 2-4)
4. **Advanced Features & Testing** (Weeks 4-6)

## Phase 1: Quick Wins (Week 1)

These changes have high impact and low implementation effort:

| Change | Description | Owner | Effort |
|--------|-------------|-------|--------|
| Hero CTAs | Update button text from "Get My Appraisal" to "Find My Expert Appraiser" | Dev | 0.5d |
| Guarantees | Combine guarantees into "100% Satisfaction & Money-Back Guarantee" | Dev | 0.5d |
| Remove `ValueProposition` | Component returns null; remove from page | Dev | 0.5d |
| Trust Bar Logo Links | Add external links to association logos | Dev | 0.5d |
| Trust Footer CTA | Change "Start Now" to "Connect with Your Appraiser" | Dev | 0.5d |

## Phase 2: Content & Messaging Overhaul (Weeks 1-2)

Update the messaging throughout the site to focus on "appraisers" rather than "appraisals":

| Change | Description | Owner | Effort |
|--------|-------------|-------|--------|
| Hero Headline | Change to "Connect with Certified Art Appraisers Instantly" | Content | 0.5d |
| Hero Subheadline | Add line about specialization: "Specializing in fine art, antiques & collectibles..." | Content | 0.5d |
| Process Step Copy | Reframe steps in "appraiser" voice (see improvements.md) | Content | 1d |
| Services Descriptions | Update to emphasize appraiser expertise for each service type | Content | 1d |
| Features Copy Update | Replace "Certified Experts" with upgraded copy and add 5th tile | Content/Dev | 1.5d |
| Success Stories Link | Add "Ask [Appraiser Name] How They Did It" to testimonials | Content/Dev | 1d |

## Phase 3: UI & Component Updates (Weeks 2-4)

More substantial changes requiring design and development work:

| Change | Description | Owner | Effort |
|--------|-------------|-------|--------|
| Expert Faces Clickable | Make expert faces in Hero link to their profiles | Design/Dev | 1.5d |
| Turnaround Badge | Add "24-48h turnaround" badge near primary CTA | Design/Dev | 1d |
| Feature Section Arrow | Add "See Our Experts" arrow linking to experts section | Design/Dev | 1d |
| Experts Showcase Update | Expand experts grid, add specializations & personalized CTAs | Design/Dev | 3d |
| Recent Appraisals Update | Add "Appraiser: [Name]" to each case | Design/Dev | 1d |
| Secondary Service CTA | Add "Not sure? Talk to an Appraiser" option to services | Design/Dev | 1.5d |
| Trust Bar Learn More Link | Add anchor link to Trust Footer | Dev | 0.5d |

## Phase 4: Advanced Features & Testing (Weeks 4-6)

Complex features and final optimization:

| Change | Description | Owner | Effort |
|--------|-------------|-------|--------|
| Dynamic Expert Profiles | Convert `ExpertProfile` to support all experts | Dev | 3-5d |
| Sticky Header | Add persistent "Speak to an Appraiser" header | Design/Dev | 2d |
| Exit Intent Popup | "Chat with an Art Appraiser now" popup | Design/Dev | 2d |
| Rotating Success Stories | Cycle through 2-3 different use case testimonials | Dev | 2d |
| A/B Testing Setup | Test button variations (e.g., "Find My Appraiser" vs. "Get Matched") | Dev/Marketing | 2d |
| Performance Optimization | Ensure all lazy-loading and animations are optimized | Dev | 2d |
| Cross-browser Testing | Test on all major browsers and devices | QA | 2d |
| Analytics Events | Add tracking for new CTAs and user interactions | Dev | 1d |

## Resource Requirements

- **Design**: 1 designer for 2-3 weeks
- **Development**: 1-2 developers for 4-6 weeks
- **Content**: 1 copywriter for 1-2 weeks
- **QA**: 1 tester for 1 week

## Success Metrics

We'll measure the impact of these changes using:

1. **Conversion Rate**: Increase in visitor → lead conversion
2. **Click-Through Rate**: Engagement with expert profiles and "connect with appraiser" CTAs
3. **Time on Page**: Increased engagement with content
4. **Bounce Rate**: Reduction in immediate bounces
5. **Heat Mapping**: Visual tracking of where users are focusing attention

## Next Steps

1. Get stakeholder approval for this plan
2. Brief the design team on visual style guide from improvements.md
3. Begin copywriting updates in parallel with Phase 1 development
4. Schedule weekly progress reviews

## Technical Notes

- Use the UI style guide in improvements.md for all visual updates
- Ensure responsive design principles are maintained throughout
- Coordinate with SEO team to maintain/improve rankings for "art appraiser" keywords
- Consider implementing schema.org markup for experts to improve SERP presence 