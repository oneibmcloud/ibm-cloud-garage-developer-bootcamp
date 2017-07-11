#!/bin/bash

cf add-plugin-repo CF-Community http://plugins.cloudfoundry.org
cf install-plugin blue-green-deploy -r CF-Community <<< y
cf bgd "${CF_APP}"-qa

cf create-route "${CF_SPACE}" mybluemix.net -n "${CF_APP}"-qa
cf map-route "${CF_APP}"-qa mybluemix.net -n "${CF_APP}"-qa


