install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

bin/brain-even.js:
	npx eslint .
	chmod +x bin/brain-even.js