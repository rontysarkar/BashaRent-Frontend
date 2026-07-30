import PropertyDetails from '@/components/properties/property-details';
import { getPropertyDetails } from '@/services/propertiy.service';
import React from 'react'
import { toast } from 'sonner';

export default async function page({params}:{params:Promise<{id:string}>}) {

  const {id} = await params;
  const result = await getPropertyDetails(id);
  if(!result.success){
    toast.error("Something Wrong")
  }
  return (
    <div>
      <PropertyDetails property={result.data} />
    </div>
  )
}
