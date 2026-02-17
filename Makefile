.PHONY: install lint test brain-games publish

install:
	npm ci

lint:
	@echo "Запуск ESLint..."
	@npx eslint .

test:
	@npm test

brain-games:
	@node bin/brain-games.js

publish: lint test
	npm publish --dry-run


