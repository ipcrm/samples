import {
    configure,
} from "@atomist/sdm-core";
import {IsServerlessDeployable, ServerlessDeploy} from "@ipcrm/sdm-pack-serverless";
import {serverlessSupport} from "@ipcrm/sdm-pack-serverless/lib/serverless";

/**
 * Atomist SDM Sample
 * @description SDM that uses a mulit-SDM setup for deploying Serverless.com
 * @tag sdm,serverless
 * @instructions <p>Start this SDM with it's peer (deployer) to utilize a multi-sdm deployment workflow for Serverless.com</p>
 */

export const configuration = configure(async sdm => {
    sdm.configuration.name = "serverless-scheduler";
    sdm.addExtensionPacks(
        serverlessSupport(),
    );
    const dev = new ServerlessDeploy()
        .with({
            deployArgs: { stage: "dev" },
            registrationName: "serverless-deployer",
        });

    return {
        serverless: {
            test: IsServerlessDeployable,
            goals: [
                dev,
            ],
        },
    };
});
