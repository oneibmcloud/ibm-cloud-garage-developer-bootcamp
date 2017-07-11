#!/bin/bash

cf add-plugin-repo CF-Community http://plugins.cloudfoundry.org
cf install-plugin blue-green-deploy -r CF-Community <<< y
cf bgd "${CF_APP}"

cf create-route "${CF_SPACE}" mybluemix.net -n "${CF_APP}"
cf map-route "${CF_APP}" mybluemix.net -n "${CF_APP}"


