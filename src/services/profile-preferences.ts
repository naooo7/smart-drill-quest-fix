import { getStore } from "@/lib/storage";

const STORAGE_KEY = "fastlearner:profile-preferences:v1";

type ProfilePreferences = {
  version: 1;
  targetInstitutionId: string | null;
};

const emptyPreferences: ProfilePreferences = {
  version: 1,
  targetInstitutionId: null,
};

export function getTargetInstitutionId() {
  const stored = getStore().read<ProfilePreferences>(STORAGE_KEY);
  return stored?.version === 1 ? stored.targetInstitutionId : null;
}

export function setTargetInstitutionId(targetInstitutionId: string) {
  getStore().write<ProfilePreferences>(STORAGE_KEY, {
    ...emptyPreferences,
    targetInstitutionId,
  });
}