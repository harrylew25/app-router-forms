'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';


import { z } from 'zod';
import { schema } from './registrationSchema';


const RegistrationForm = () => {
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            first: '',
            last: '',
            email: '',
        }
    });

    const onSubmit = async (data: z.infer<typeof schema>) => {
        console.log(data);
    };
    return (
        <Form {...form}>
            <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex gap-2">
                    <FormField control={form.control} name='first'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input placeholder='' {...field} />
                                </FormControl>
                                <FormDescription>Your First Name.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField control={form.control} name='last'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input placeholder='' {...field} />
                                </FormControl>
                                <FormDescription>Your Last Name.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField control={form.control} name='email'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder='' {...field} />
                            </FormControl>
                            <FormDescription>Your email address.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit'>Submit</Button>
            </form>
        </Form>
    );
};

export default RegistrationForm;;