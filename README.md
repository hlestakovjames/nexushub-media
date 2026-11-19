# Nexus Hub TV

**Nexus Hub TV** is the institutional Insights & Media application of the Nexus Hub ecosystem. It provides a home for editorial publishing, reporting, stories, voices, video and other approved media experiences.

It is one of six ecosystem applications. It is not limited to a conventional live-streaming television service.

## Product responsibilities

Nexus Hub TV owns the institutional media and editorial domain, including:

- News, reporting and editorial coverage.
- Institutional insights, features and stories.
- Interviews, voices and recorded media.
- Video and other approved media experiences.
- Editorial content organisation and publishing workflows.
- Live and special media experiences where separately approved.

Corporate announcements and official company information remain under the Corporate Website where appropriate; editorial reporting and media publication belong here.

## Live Studio boundary

Live Studio is a **restricted internal production workspace**, not a public-facing destination. Production controls, stream credentials, ingest URLs and operator functions must never be exposed through public pages or unauthorised APIs. Public media experiences and internal production tools require separate access boundaries.

## Architecture direction and open items

The documented direction favours a maintainable editorial publishing capability and an embed-first/provider-managed approach for recorded video in the initial architecture baseline. Specific CMS, media provider, live provider, identity integration, storage, analytics, retention and deployment arrangements remain subject to verification and approval.

Existing source code contains prototype and partial media/live-broadcast capabilities. Their presence does not establish production readiness. In particular, review access enforcement, API response sanitisation, secret handling, public/private route separation, persistence, operational monitoring and provider configuration before any production use.

## Technology and local development

Inspect the repository's package manifest, lockfile and environment example for the exact current stack and commands. Do not assume that all documented target services are already connected.

```bash
npm install
npm run dev
```

Use only the scripts actually declared in `package.json`. Keep all credentials in secure environment configuration and never commit stream keys, ingest URLs or production secrets.

## Ecosystem boundaries

- Corporate Website — official corporate information, services and enquiries.
- NexusApp — ecosystem discovery and participation.
- Corporate Workspace — internal organisational operations.
- **Nexus Hub TV (this application)** — editorial, insights and media.
- Nexus Hub Learning — courses and learning progress.
- Administration Console — privileged platform administration and technical governance.

## Documentation

- [Central Nexus Hub ecosystem documentation](https://github.com/hlestakovjames/nexushub-documentation)
- [Nexus Hub TV application documentation](https://github.com/hlestakovjames/nexushub-documentation/tree/main/04-applications/nexus-hub-tv)
- [Nexus Hub TV architecture diagrams](https://github.com/hlestakovjames/nexushub-documentation/blob/main/03-diagrams/nexus-hub-tv-architecture-diagrams.md)
- [Ecosystem decision register](https://github.com/hlestakovjames/nexushub-documentation/blob/main/05-governance-and-decisions/decision-register.md)
- [Project status](https://github.com/hlestakovjames/nexushub-documentation/blob/main/PROJECT-STATUS.md)

## Status

This README records the product boundary and current architectural cautions. It is not a production-readiness declaration. Verify implementation, security, provider configuration, deployment and operational procedures independently before release.
