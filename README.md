# TutorialKit Starter (my experience getting Angular started)

Thread where I explain what to do to get an Angular project working

https://x.com/SCooperDev/status/1816749422492995800

Overall, do these steps

EDIT 8/1/24 - don't install from the Angular template, just pull the dependencies into the root of the repo's `package.json`

- Read the blog announcement: https://blog.stackblitz.com/posts/announcing-tutorialkit/
- Follow the step by step on installing and making your first project: https://tutorialkit.dev/guides/about/
- Once you are done with the "Content Creation" section of the docs guide, skip to "Overriding Components" and read that.
- Everything below is my experience to briding the gap between what is outlined in "Overriding Components" and getting a basic Angular example running

> https://github.com/michael-small/angular-TutorialKit-hello-world my git config was messed up on my PC, so the git history is not as discreet step by step as I wished it was. I assume someone will make framework starters.
>
> Essentially, in the `src/templates`, I CLI generated a new Angular project. Then, in the `content/turorial/1-basics/1-introduction/1-welcome`, there is `_files/` and `_solution/`. Then I do the path of the file I want to override. In this case, `src/app/app.component.html`.
> 
> May have been a my PC thing, but I recommend deleting your `node_modules` the `ng new app` auto generates. When you run the docs app command, you can install using your preferred installer. I had permission issues for that command to overwrite the original generated modules.
> 
> The commands for the install and serve go in the `root/src/content/tutorial/meta.md`. Oh, and the file overrides I mentioned, point the intended path in the `contend.md` in the same folder as the `_files` and `_solution` folders.
> 
> Lastly, the CLI experience from the docs does most of this setup of everything else. I inferred the rest of this stuff I figured out from this section of the new project walkthrough doc: https://tutorialkit.dev/guides/overriding-components/

--- 

👋 Welcome to TutorialKit!

This README includes everything you need to start writing your tutorial content quickly.

## Project Structure

```bash
.
├── astro.config.mjs    # TutorialKit uses Astro 🚀 (https://astro.build)
├── src
│   ├── ...
│   ├── content
│   │   └── tutorial    # Your tutorial content lives here
│   └── templates       # Your templates (see below for more information)
├── public
│   ├── favicon.svg
│   └── logo.svg        # Default logo used in top left for your tutorial
├── ...
├── theme.ts            # Customize the theme of the tutorial
└── uno.config.ts       # UnoCSS config (https://unocss.dev/)
```

## Getting Started

Make sure you have all dependencies installed and started the dev server:

```bash
npm install
npm run dev
```

## UI Structure

```markdown
┌─────────────────────────────────────────────────────┐
│ ● ● ●                                               │
├───────────────────────────┬─────────────────────────┤
│                           │                         │
│                           │                         │
│                           │                         │
│                           │                         │
│                           │       Code Editor       │
│                           │                         │
│                           │                         │
│                           │                         │
│                           │                         │
│          Content          ├─────────────────────────┤
│                           │                         │
│                           │                         │
│                           │  Preview & Boot Screen  │
│                           │                         │
│                           │                         │
│                           ├─────────────────────────┤
│                           │                         │
│                           │        Terminal         │
│                           │                         │
└───────────────────────────┴─────────────────────────┘
```

## Authoring Content

A tutorial consists of parts, chapters, and lessons. For example:

- Part 1: Basics of Vite
  - Chapter 1: Introduction
    - Lesson 1: Welcome!
    - Lesson 2: Why Vite?
    - …
  - Chapter 2: Your first Vite project
- Part 2: CLI
  - …

Your content is organized into lessons, with chapters and parts providing a structure and defining common metadata for these lessons.

Here’s an example of how it would look like in `src/content/tutorial`:

```bash
tutorial
├── 1-basics-of-vite
│   ├── 1-introduction
│   │   ├── 1-welcome
│   │   │   ├── content.md    # The content of your lesson
│   │   │   ├── _files        # Initial set of files
│   │   │   │   └── ...
│   │   │   └── _solution     # Solution of the lesson
│   │   │       └── ...
│   │   ├── 2-why-vite
│   │   │   ├── content.md
│   │   │   └── _files
│   │   │       └── ...
│   │   └── meta.md           # Metadata for the chapter
│   └── meta.md               # Metadata for the part
├── 2-advanced
│   ├── ...
│   └── meta.md
└── meta.md                   # Metadata for the tutorial
```

### Supported Content Formats

Content can be either written as Markdown (`.md`) files or using [MDX](https://mdxjs.com/) (`.mdx`). Files have a Front Matter at the top that contains the metadata and everything that comes after is the content of your lesson.

**Example**

```markdown
---
type: lesson
title: Welcome!
---

# Welcome to TutorialKit!

In this tutorial we'll walk you through how to setup your environment to
write your first tutorial 🤩
```

The metadata file (`meta.md`) of parts, chapters, and lessons do not contain any content. It only contains the Front Matter for configuration.

### Metadata

Here is an overview of the properties that can be used as part of the Front Matter:

| Property        | Required | Type                        | Inherited | Description                                                                                                                                           |
| --------------- | -------- | --------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| type            | ✅       | `part \| chapter \| lesson` | ❌        | The type of the metadata.                                                                                                                             |
| title           | ✅       | `string`                    | ❌        | The title of the part, chapter, or lesson.                                                                                                            |
| slug            |          | `string`                    | ❌        | Let’s you customize the URL pathname which is `/:partSlug/:chapterSlug/:lessonSlug`.                                                                  |
| previews        |          | `Preview[]`                 | ✅        | Configure which ports should be used for the previews. If not specified, the lowest port will be used.                                                |
| autoReload      |          | `boolean`                   | ✅        | Navigating to a lesson that specifies `autoReload` will always reload the preview. This is typically only needed if your server does not support HMR. |
| prepareCommands |          | `Command[]`                 | ✅        | List of commands to execute sequentially. They are typically used to install dependencies or to run scripts.                                          |
| mainCommand     |          | `Command`                   | ✅        | The main command to be executed. This command will run after the `prepareCommands`.                                                                   |

A `Command` has the following shape:

```ts
string | [command: string, title: string] | { command: string, title: string }
```

The `title` is used as part of the boot screen (see [UI Structure](#ui-structure)).

A `Preview` has the following shape:

```ts
string | [port: number, title: string] | { port: number, title: string }
```

In most cases, metadata is inherited. For example, if you specify a `mainCommand` on a chapter without specifying it on any of its lessons, each lesson will use the `mainCommand` from its respective chapter. This extends to chapter and parts as well.
# angular-TutorialKit-hello-world
# angular-TutorialKit-hello-world
