'use server';

/**
 * @fileOverview An AI agent to generate detailed information about a specific eye care service.
 *
 * - generateServiceDetails - A function that handles the generation of service details.
 * - GenerateServiceDetailsInput - The input type for the generateServiceDetails function.
 * - GenerateServiceDetailsOutput - The return type for the generateServiceDetails function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateServiceDetailsInputSchema = z.object({
  serviceName: z.string().describe('The name of the eye care service.'),
});
export type GenerateServiceDetailsInput = z.infer<typeof GenerateServiceDetailsInputSchema>;

const GenerateServiceDetailsOutputSchema = z.object({
  details: z.string().describe('Detailed information about the eye care service, including benefits, risks, and the procedure itself.'),
});
export type GenerateServiceDetailsOutput = z.infer<typeof GenerateServiceDetailsOutputSchema>;

export async function generateServiceDetails(input: GenerateServiceDetailsInput): Promise<GenerateServiceDetailsOutput> {
  return generateServiceDetailsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateServiceDetailsPrompt',
  input: {schema: GenerateServiceDetailsInputSchema},
  output: {schema: GenerateServiceDetailsOutputSchema},
  prompt: `You are an expert in eye care services.

  Generate detailed information about the following eye care service, including benefits, risks, and the procedure itself.

  Service Name: {{{serviceName}}}
  `,
});

const generateServiceDetailsFlow = ai.defineFlow(
  {
    name: 'generateServiceDetailsFlow',
    inputSchema: GenerateServiceDetailsInputSchema,
    outputSchema: GenerateServiceDetailsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
