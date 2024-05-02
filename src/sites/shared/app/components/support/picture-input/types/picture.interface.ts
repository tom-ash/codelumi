export interface Picture {
  blob: Blob
  objectUrl: string
  file?: File
  database?: string
  rotatedBy?: 0 | 90 | 180 | 270
}
