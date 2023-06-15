export interface Suivie
  {
		id: number,
		offreCommercial: boolean,
		montant: number,
		compteRendu: string,
		typePrestation: {
      id:number,
			libelle: string,
		},
		pov: {
			id: number,
      libellePov: string,


		}
}
