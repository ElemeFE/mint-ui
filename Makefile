.PHONY: dist

bootstrap:
	./node_modules/.bin/lerna bootstrap

dev: bootstrap
	npm run dev

dist: bootstrap
	npm run dist

dist-all:
	node bin/build-all.js

deploy:
	npm run deploy

publish:
	./node_modules/.bin/lerna publish
