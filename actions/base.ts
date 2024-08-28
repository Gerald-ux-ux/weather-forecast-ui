export const baseUrl: string = process.env.API!;

/**
 * @function
 * Re-usable get function that returns data in formatted way with type safety
 */
export async function GET<T>(url: string) {
  try {
    const res = await fetch(url).then((res) => res.json());
    console.log("this is res", res);
    return res as T;
  } catch (error: any) {
    return error;
  }
}
