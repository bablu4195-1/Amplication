import { NarachiCorporation as TNarachiCorporation } from "../api/narachiCorporation/NarachiCorporation";

export const NARACHICORPORATION_TITLE_FIELD = "Mining";

export const NarachiCorporationTitle = (
  record: TNarachiCorporation
): string => {
  return record.Mining || record.id;
};
