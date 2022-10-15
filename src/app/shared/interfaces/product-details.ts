export interface ProductDetails {
    quantity: number
    batchId: string
    runId: string
    packageItems: PackageItem[]
  }
  
  export interface PackageItem {
    totalPackages: number
    numberOfItemsPerPackage: number
  }