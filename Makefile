.PHONY: dist
default: help

dev:
	npm run dev

dist:
	npm run dist

dist-all:
	node build/bin/build-all.js

deploy:
	npm run deploy

pub:
	npm run pub

pub-all:
	npm run pub:all

help:
	@echo "   \033[35mmake\033[0m \033[1m命令使用说明\033[0m"
	@echo "   \033[35mmake install\033[0m\t\033[0m\t---  安装依赖"
	@echo "   \033[35mmake dev\033[0m\t\033[0m\t---  开发模式"
	@echo "   \033[35mmake dist\033[0m\t\033[0m\t---  编译项目，生成目标文件"
	@echo "   \033[35mmake dist-all\033[0m\t---  分别编译每个组件项目"
	@echo "   \033[35mmake deploy\033[0m\t\033[0m\t---  部署 demo"
	@echo "   \033[35mmake pub\033[0m\t\033[0m\t---  发布到 npm 上"
	@echo "   \033[35mmake pub-all\033[0m\t\033[0m\t---  发布各组件到 npm 上"
