#!/bin/bash

cf add-plugin-repo CF-Community http://plugins.cloudfoundry.org
cf install-plugin blue-green-deploy -r CF-Community <<< y
cf bgd "${CF_APP}"-dev

cf create-route "${CF_SPACE}" mybluemix.net -n "${CF_APP}"-dev
cf map-route "${CF_APP}"-dev mybluemix.net -n "${CF_APP}"-dev


