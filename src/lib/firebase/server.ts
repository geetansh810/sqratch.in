import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const serviceAccount = {
  type: "service_account",
  project_id: "demo1-1de8b",
  private_key_id: "9f5456a95b338c39b57827fcfbdf04694f04ca75",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC6O2aqCqrgXUls\nebezCTf5DJ2kJmQmG3F1CRpSIvR8MA5Fr3genldW0oTwQ0f5jI1ePVmoyTSNl1sa\n4IH6W4qnsoRKWpX4L6vXbl6X1V+dO8CdhS8GDUdOuxV39ZczK9EbqQlcPirCKin4\njAiQgurEJgaSqVnfnOz71/x+mn9OK0oMaw1hq/V+DOo6sJGBcE7AfltxC+WWvQaG\nVteMeUK4gvLb/kQnjj7uexc7ApdJLBxwY2KD9LHOyQHeiRjmZu4cIn+MV3qp2u24\njWUmZ/egI2P26qCfzCle8RQlyzIPtQ6KJ3QUeOuju0R5L8Z2xlJD6psEmZ/DnN0x\nYH9pIeBrAgMBAAECggEAIPnIrX5TEIRkLmmFDhYpS5egyEKmBBti5SLV/spCuUS3\nGj6+Scmm1HBVase3FGh/VbsOR7VM8W9mCeXMDh0seZJCG3pbyMUELBLWfBMjqY89\nhYbiMzOhtz6oSAP8IGr3TWsKhcNaReQ6Z1DAaXpNAKttCYYkLFS4n8V4Z6CKvzfc\nGrCfamf+7E0/JtIO0nqfCHf5nS1flaOb9svQqWQcxOoVT13h/ymHsy6RmmdOmdxk\nUInA02mLR0XRzvdYdYwClDLqCNJmsQrJeRoC1TKHD3Kkoq6wMH7S2ug9pVTgHG81\neEzz8itMTv4jeNFWjQXJtwFH1BVDmL0bSAsdIVV7TQKBgQD4uhVLThjzI0auPGFn\n3TSBy/8698I0PBhLUdaKgjBQkZqE5GqgBdfIoeffB8GcAsxSSMCE0TdCH0ZIwBWK\n4nYkHej4/yR8By+kUcB2bojw36uCk/cnFfthCAAjCj2+4J9UBtJ/lo+V0fejZEyf\nzb5fauNZfZcgl8kIfzSPBZiblQKBgQC/rX6faGuoPgahNH75tuiy44KIildBEPrA\n6OewHrTzO3uF/fKrWwDGj61J5K04iG8pckEH9ljTWPcqzQuKpHxib9jUZcSEDtqS\np9W/QCysXvIdhBnJFYjskZkCA+zlQzJowcaJ5Kyraxtz1i9OcwUK3XZsCnGRI6vx\n94KC4dGL/wKBgQDXfgEs+UDMhmeaVV3e6tuvCNrccAOl1dsGhqTl492QMFY7hNqM\nQgOuI/gMV1/6lsIHGFkTuV+yvf3a0fDYH1RT/kX2VLd7bY5tQxcIhMPITUD/JMsg\n5f6hFplnwlu0oE/qMO728677EqsGuMNaQJsLeEP5KMJizp6x6ePTdfm98QKBgQCd\nrYM0bxng1OVvR1gM5EKYpj+DQwp0JBujBfVSFHCWhqAeocE25S3GKftLhipZDyMi\n3TJR8n0vn0f0laig7J7F+2xLjUwTtoRnkFltcsVNJu3VCg6MNILm2P8dgU0nbBfT\nxVQlq0+/0+RJbjCMQGIthfEc/5pc4xNXgVyDfnB60QKBgHf+jRrWh51S0KO2yXeO\nCPPOVz+j+q4P5klKGhlUopQG5Q5kr+MQfWgxDjjV1pF5Yd5HcBiRqIcloVa0kiIW\nS1sXA7HeKzqN5sCrmoyQnvMm0n/OQEnmYXcQ12ZM+Kf57I8B5htsPJIG/vPYy92X\nuKNFsaoanxvugGp+krstr/XD\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-fbsvc@demo1-1de8b.iam.gserviceaccount.com",
  client_id: "117692046050137816352",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40demo1-1de8b.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

export const app = initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});

export const auth = getAuth(app);
export const firestore = getFirestore(app);
