import { bumpSiteVersion } from "./siteConfigService";

export default async function saveWithVersion(saveFn) {
  const result = await saveFn();

  await bumpSiteVersion();

  return result;
}