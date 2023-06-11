export interface Appliance{
  id: number;
  libelle: string |null;
  dbid:string | null;
  reference:string | null;
  disponibilite:boolean | null;
  type: {
    libelle:string | null;
  }

}
