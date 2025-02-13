"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl,FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogInIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().email({message:"email invalido"}),
    password: z.string().min(6,{
      message:"Senha tem que ter pelo menos 6 caracteres"
    })
  })

export type LoginFormFields = z.infer<typeof formSchema>;



export default function Formulario() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password:""
    },
  })

  return (
      <div className="min-h-screen flex justify-center items-center">
      <Form {...form}>
      <form 
      onSubmit={form.handleSubmit(async (data)=> console.log(data))} 
      className="space-y-8 w-full max-w-md">
        <h1 className=" text-center text-3xl text-primary">BEM VINDO</h1>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input 
                placeholder="Digite seu Email" {...field}
                className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha:</FormLabel>
              <FormControl>
                <Input 
                placeholder="Digite a senha" {...field} 
                className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full flex">
          Entrar
          <LogInIcon className="mr-2"/>
        </Button>
        
      </form>
    </Form>

      </div>
  );
}
