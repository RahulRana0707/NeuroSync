"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { gameConfigurationFormSchema } from "./schema";
import { GameMode, NumberOfPair } from "@/constant";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  cardThemeOptions,
  gameModeOptions,
  numberOfPairOptions,
  playerModeOptions,
} from "./utils/options";

export const GameConfigurationForm = () => {
  const form = useForm<z.infer<typeof gameConfigurationFormSchema>>({
    resolver: zodResolver(gameConfigurationFormSchema),
    defaultValues: {
      gameName: "",
      playerMode: "SINGLE_PLAYER",
      cardTheme: "ANIMALS",
      mode: GameMode.STANDARD,
      pairs: NumberOfPair["8 x 8"],
      enableSound: false,
    },
  });

  function onSubmit(values: z.infer<typeof gameConfigurationFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="gameName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Game Name</FormLabel>
              <FormControl>
                <Input placeholder="eg. Memory Master" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display Game Name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="playerMode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Player Mode</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Player Mode" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {playerModeOptions.map((option, index) => (
                      <SelectItem value={option.value} key={index}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                Choose the player mode for the game.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Game Mode</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Game Mode" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {gameModeOptions.map((mode, index) => {
                    return (
                      <SelectItem value={mode.value} key={index}>
                        {mode.label}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormDescription>
                Choose the game mode for the memory card game.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pairs"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Pairs</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Number of Pairs" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {numberOfPairOptions.map((pair, index) => (
                    <SelectItem value={pair.value} key={index}>
                      {pair.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Choose the number of pairs for the memory card game.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cardTheme"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Card Theme</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Card Theme" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {cardThemeOptions.map((theme, index) => (
                    <SelectItem value={theme.value} key={index}>
                      {theme.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Choose the card theme for the memory card game.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="enableSound"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg ">
              <div className="space-y-0.5 mr-10">
                <FormLabel>Enable Sound</FormLabel>
                <FormDescription>
                  Toggle to enable or disable sound effects in the game.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
