import {
    configure,
} from "@atomist/sdm-core";
import {ServerlessDeploy} from "@ipcrm/sdm-pack-serverless";
import {serverlessSupport} from "@ipcrm/sdm-pack-serverless/lib/serverless";

/**
 * Atomist SDM Sample
 * @description SDM that uses a mulit-SDM setup for deploying Serverless.com
 * @tag sdm,serverless
 * @instructions <p>Start this SDM with it's peer (scheduler) to utilize a multi-sdm deployment workflow for Serverless.com</p>
 */

export const configuration = configure(async sdm => {
    sdm.configuration.name = "serverless-deployer";
    sdm.addExtensionPacks(
        serverlessSupport(),
    );

    // @ts-ignore
    const dev = new ServerlessDeploy()
        .with({
            deployArgs: { stage: "dev" },
            registrationName: "serverless-deployer",
        });
});
