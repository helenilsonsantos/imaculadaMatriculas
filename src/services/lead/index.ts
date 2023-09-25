import BASEURL from "../api";
import { cadastrarLeadPayload } from "../../interfaces/leads";

export function cadastrarLead (payload: cadastrarLeadPayload) {
    return BASEURL.post('/imaculada/lead', payload)
}