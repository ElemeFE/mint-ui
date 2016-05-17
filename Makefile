.PHONY: dist

dev:
	@cooking watch -c cooking.demo.js

dist:
	@cooking build -p

deploy:
	@cooking build -c cooking.demo.js -p
	./node_modules/.bin/gh-pages -d example/dist