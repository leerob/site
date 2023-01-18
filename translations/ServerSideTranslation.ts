import { CreateClientReturn, SSRConfig } from 'next-i18next';
// @ts-ignore
import { createConfig } from 'next-i18next/dist/commonjs/config/createConfig';
// @ts-ignore
import { default as createClient } from 'next-i18next/dist/commonjs/createClient/node';
import { TFunction } from 'i18next';

export default async function ServerSideTranslation(config: SSRConfig): Promise<TFunction> {
    const internalConfig = createConfig({
        ...config._nextI18Next.userConfig,
        lng: config._nextI18Next.initialLocale,
    });
    const r: CreateClientReturn = await createClient(internalConfig);
    // @ts-ignore
    return await r.i18n.init(r.initPromise);
}