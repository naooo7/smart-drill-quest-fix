export type Institution = {
  id: string;
  shortName: string;
  name: string;
  logo: string;
};

export const institutions: Institution[] = [
  {
    id: "pkn-stan",
    shortName: "PKN STAN",
    name: "Politeknik Keuangan Negara STAN",
    logo: "/institutions/pkn-stan.png",
  },
  {
    id: "unpad",
    shortName: "UNPAD",
    name: "Universitas Padjadjaran",
    logo: "/institutions/unpad.svg",
  },
  {
    id: "ui",
    shortName: "UI",
    name: "Universitas Indonesia",
    logo: "/institutions/ui.png",
  },
  {
    id: "itb",
    shortName: "ITB",
    name: "Institut Teknologi Bandung",
    logo: "/institutions/itb.png",
  },
];

export const institutionById = (id: string | null) =>
  institutions.find((institution) => institution.id === id);