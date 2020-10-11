---
layout: post
title: Pandas code snippets
---


> Handy Pandas library code snippets to do table based data manipulation

When copying a DataFrame, always use below method so changing the original DataFrame doesn't change the copied one:
{% highlight js %}
output_df = df.copy(deep=True)
{% endhighlight %}

Check Statistics of Numeric feature columns in a DataFrame:
{% highlight js %}
pd.set_option('display.float_format', 
               lambda x: '%.5f' % x)
data.describe()
data.describe().transpose()
data.info()
{% endhighlight %}

Change Dataframe column / Series to datetime data type:
{% highlight js %}
data['Day'] = pd.to_datetime(data['Day'], 
                             format='%d/%m/%Y')
{% endhighlight %}

Get Rows based on some condition / between specific dates: 
{% highlight js %}
transactions[(transactions['date'].dt.year == 2014) & 
             (transactions['date'].dt.month >= 6) & 
             (transactions['date'].dt.month <= 8)]
{% endhighlight %}

Get other column's cell value based on condition in another column:
{% highlight js %}
data.loc[data['Average barometer (in)'] == data['Average barometer (in)'].median(), 'Day'].iloc[0]

data['Parch'][(data['Age'] < 15) & 
              (data['Title'] == 'Miss')]

mask[mask['item_price'] == mask['item_price'].max()]['item_id'].iloc[0]
{% endhighlight %}


-----

Want to see something else added? <a href="https://amish.github.io/about">Request</a>
