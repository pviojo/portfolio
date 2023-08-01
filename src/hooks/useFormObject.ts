import { useEffect, useState } from 'react';

export interface UseFormObjectReturn<Type> {
  fields: Type;
  updateFields: (field: string, value: any) => void;
}

export function useFormObject<T>(defaultObject: T): UseFormObjectReturn<T> {
  let [fields, setFields] = useState<T>(defaultObject);

  useEffect(() => {
    setFields(defaultObject);
  }, [defaultObject]);

  const updateFields = (field: string, value: any) => {
    setFields((prevFields) => {
      return {
        ...prevFields,
        [field]: value,
      };
    });
  };
  return { fields, updateFields };
}