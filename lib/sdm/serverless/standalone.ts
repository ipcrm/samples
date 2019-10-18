import {
    configure,
} from "@atomist/sdm-core";
import {IsServerlessDeployable, ServerlessDeploy} from "@ipcrm/sdm-pack-serverless";
import {serverlessSupport} from "@ipcrm/sdm-pack-serverless/lib/serverless";

/**
 * Atomist SDM Sample
 * @description SDM that deploys via Serverless.com framework
 * @tag sdm,cache,node
 * @instructions <p>This SDM is now listening for pushes to repos with a serverless.y{,a}ml file in them.  If found, it will use the Serverless.com
 *               tooling to complete the deployment.</p>
 */

export const configuration = configure(async sdm => {
    sdm.configuration.name = "serverless-standalone";
    sdm.addExtensionPacks(
        serverlessSupport(),
    );
    const dev = new ServerlessDeploy()
        .with({
            deployArgs: { stage: "dev" },
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
