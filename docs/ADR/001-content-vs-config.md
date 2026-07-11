# ADR-001: Separate Content from Configuration

## Status

Accepted

## Context

JT Framework needs to support multiple business websites using the same core structure.

If all business data lives in one file, the project becomes harder to maintain as content grows.

## Decision

Separate configuration from content.

Configuration lives in:

```text
src/config/
