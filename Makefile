run: compile
	node main.js

compile: gen-proto
	tsc  main.ts resource.ts

gen-proto:
	npx buf generate

clean-proto:
	rm -rf proto/generated