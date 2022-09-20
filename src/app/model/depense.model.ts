
export interface Depense {
    id:                 number;
    status:             Status;
    montant:            number;
    modeReglement:      string;
    titre:              string;
    pieceJustificative: string;
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
    PENDING, ACCEPTE, REJETE

}
export enum ModeReglement {
    CARTE_BANCAIRE,
    ESPECES,
    CHEQUE
}
