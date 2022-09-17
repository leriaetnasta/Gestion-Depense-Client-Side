
export interface Depense {
    id:                 number;
    status:             Status;
    montant:            number;
    modeReglement:      string;
    titre:              string;
    pieceJustificative: null;
    deplacement:        DeplacementDTO;
    commentaire:        string;
}

export interface DeplacementDTO {
    id:         number;
    adresse:    null;
    dateDepart: null;
    dateRetour: null;
}

export enum Status{
    PENDING="En attente", ACCEPTE="Validé", REJETE="Refusé"

}
export enum ModeReglement {
    CARTE_BANCAIRE= "Carte Bancaire",
    ESPECES="Espèce",
    CHEQUE="Cheque"
}
