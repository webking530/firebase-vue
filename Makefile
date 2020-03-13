
run_build_dev:
	npm run builddev

run_build_stage:
	npm run buildstage

run_build_prod:
	npm run build

deploy_firebase_dev:
	firebase use development
	firebase deploy

deploy_firebase_stage:
	firebase use staging
	firebase deploy

deploy_firebase_prod:
	firebase use default
	firebase deploy

deploy_dev: run_build_dev deploy_firebase_dev

deploy_stage: run_build_stage deploy_firebase_stage

deploy_prod: run_build_prod deploy_firebase_prod
