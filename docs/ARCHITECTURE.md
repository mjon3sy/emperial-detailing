# JT Framework Architecture

JT Framework is a reusable business website framework designed to create fast, professional, low-maintenance websites.

## Goal

Reduce the time and complexity required to launch professional business websites while maintaining a consistent level of quality.

## Core Principles

- Pages assemble sections.
- Sections assemble components.
- Components should be reusable.
- Content is separate from configuration.
- Themes control presentation.
- Business-specific information should not be hard-coded into framework components.
- Features should be added to the framework only when they are useful across multiple sites.

## Folder Structure

```text
src/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── config/
├── content/
├── layouts/
├── styles/
├── themes/
├── types/
└── utils/
