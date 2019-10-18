import {
    configure,
} from "@atomist/sdm-core";
import {ServerlessDeploy} from "@ipcrm/sdm-pack-serverless";
import {serverlessSupport} from "@ipcrm/sdm-pack-serverless/lib/serverless";

export const configuration = configure(async sdm => {
    sdm.configuration.name = "serverless-deployer";
    sdm.addExtensionPacks(
        serverlessSupport(),
    );

    // @ts-ignore
    const dev = new ServerlessDeploy()
        .with({
            deployArgs: { stage: "dev" },
        });
});
