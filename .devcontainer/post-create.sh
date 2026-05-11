#!/usr/bin/env bash
set -eou pipefail

sudo usermod --shell /usr/bin/fish $USER

mise trust
mise install

mise exec -- pnpm install --frozen-lockfile