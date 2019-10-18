import {
    configure,
} from "@atomist/sdm-core";
import {IsServerlessDeployable, ServerlessDeploy} from "@ipcrm/sdm-pack-serverless";
import {serverlessSupport} from "@ipcrm/sdm-pack-serverless/lib/serverless";

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
