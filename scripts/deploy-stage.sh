#!/bin/bash

cf add-plugin-repo CF-Community http://plugins.cloudfoundry.org
cf install-plugin blue-green-deploy -r CF-Community <<< y
cf bgd "${CF_APP}"-stage

cf create-route "${CF_SPACE}" mybluemix.net -n "${CF_APP}"-stage
cf map-route "${CF_APP}"-stage mybluemix.net -n "${CF_APP}"-stage


